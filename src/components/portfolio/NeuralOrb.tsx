import { useEffect, useRef } from "react";

/**
 * Canvas-based neural orb: rotating sphere of points with connection lines.
 * Reactive to mouse movement. Lightweight (no Three.js).
 */
export function NeuralOrb() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Fibonacci sphere points
    const N = 220;
    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      pts.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      });
    }

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left - r.width / 2) / r.width;
      my = (e.clientY - r.top - r.height / 2) / r.height;
    };
    window.addEventListener("mousemove", onMove);

    let t = 0; let raf = 0;
    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;
      const R = Math.min(w, h) * 0.38;

      const ay = t + mx * 0.8;
      const ax = t * 0.6 + my * 0.8;
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const cosX = Math.cos(ax), sinX = Math.sin(ax);

      const proj = pts.map((p) => {
        // rotate Y
        let x = p.x * cosY + p.z * sinY;
        let z = -p.x * sinY + p.z * cosY;
        // rotate X
        let y = p.y * cosX - z * sinX;
        z = p.y * sinX + z * cosX;
        const persp = 1 / (1.6 - z * 0.6);
        return { x: cx + x * R * persp, y: cy + y * R * persp, z, s: persp };
      });

      // connections
      ctx.lineWidth = 1;
      for (let i = 0; i < proj.length; i++) {
        for (let j = i + 1; j < proj.length; j++) {
          const a = proj[i], b = proj[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 1800) {
            const alpha = (1 - d2 / 1800) * 0.35 * Math.max(0.2, (a.z + b.z) / 2 + 0.5);
            ctx.strokeStyle = `rgba(120, 220, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      // points
      for (const p of proj) {
        const r = 1.4 * p.s + (p.z > 0.7 ? 1 : 0);
        const a = 0.5 + p.z * 0.5;
        ctx.fillStyle = `rgba(180, 240, 255, ${a})`;
        ctx.shadowBlur = 12; ctx.shadowColor = "rgba(120, 220, 255, 0.8)";
        ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.shadowBlur = 0;

      // core glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.7);
      grad.addColorStop(0, "rgba(180, 120, 255, 0.35)");
      grad.addColorStop(0.5, "rgba(80, 160, 255, 0.12)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(cx, cy, R * 0.7, 0, Math.PI * 2); ctx.fill();

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas ref={ref} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="size-[60%] rounded-full border border-primary/20 animate-orbit" style={{ animationDuration: "40s" }} />
        <div className="absolute size-[80%] rounded-full border border-accent/15 animate-orbit" style={{ animationDuration: "70s", animationDirection: "reverse" }} />
      </div>
    </div>
  );
}