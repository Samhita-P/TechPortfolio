import { useEffect, useRef } from "react";

export function NeuralOrb() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0;
    let my = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const getParticleCount = () => {
      const width = window.innerWidth;

      if (width < 480) return 60;       // phones
      if (width < 768) return 90;       // large phones
      if (width < 1024) return 130;     // tablets
      if (width < 1440) return 180;     // laptops
      if (width < 1920) return 220;     // desktop
      return 280;                       // TV / ultrawide
    };

    let pts: { x: number; y: number; z: number }[] = [];

    const generatePoints = () => {
      const N = getParticleCount();
      pts = [];

      for (let i = 0; i < N; i++) {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        pts.push({
          x: Math.cos(theta) * Math.sin(phi),
          y: Math.sin(theta) * Math.sin(phi),
          z: Math.cos(phi),
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();

      w = rect.width;
      h = rect.height;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      generatePoints();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      my = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };

    const onTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;

      const rect = canvas.getBoundingClientRect();

      mx = (touch.clientX - rect.left - rect.width / 2) / rect.width;
      my = (touch.clientY - rect.top - rect.height / 2) / rect.height;
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    let t = 0;

    const draw = () => {
      t += 0.003;

      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.36;

      const ay = t + mx * 0.8;
      const ax = t * 0.6 + my * 0.8;

      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);

      const proj = pts.map((p) => {
        let x = p.x * cosY + p.z * sinY;
        let z = -p.x * sinY + p.z * cosY;

        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;

        const persp = 1 / (1.6 - z * 0.6);

        return {
          x: cx + x * R * persp,
          y: cy + y * R * persp,
          z,
          s: persp,
        };
      });

      ctx.lineWidth = window.innerWidth < 640 ? 0.6 : 1;

      const maxDistance =
        window.innerWidth < 640 ? 1000 : 1800;

      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i];
          const b = proj[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;

          if (d2 < maxDistance) {
            const alpha =
              (1 - d2 / maxDistance) *
              0.35 *
              Math.max(0.2, (a.z + b.z) / 2 + 0.5);

            ctx.strokeStyle = `rgba(120, 220, 255, ${alpha})`;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of proj) {
        const radius =
          window.innerWidth < 640
            ? 1 * p.s
            : 1.4 * p.s + (p.z > 0.7 ? 1 : 0);

        const alpha = 0.5 + p.z * 0.5;

        ctx.fillStyle = `rgba(180, 240, 255, ${alpha})`;
        ctx.shadowBlur = window.innerWidth < 640 ? 6 : 12;
        ctx.shadowColor = "rgba(120, 220, 255, 0.8)";

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      const grad = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        R * 0.7
      );

      grad.addColorStop(0, "rgba(180, 120, 255, 0.35)");
      grad.addColorStop(0.5, "rgba(80, 160, 255, 0.12)");
      grad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.7, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={ref} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div
          className="size-[55%] sm:size-[60%] rounded-full border border-primary/20 animate-orbit"
          style={{ animationDuration: "40s" }}
        />

        <div
          className="absolute size-[75%] sm:size-[80%] rounded-full border border-accent/15 animate-orbit"
          style={{
            animationDuration: "70s",
            animationDirection: "reverse",
          }}
        />
      </div>
    </div>
  );
}