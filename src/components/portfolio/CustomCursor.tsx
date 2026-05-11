import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-magnetic]"));
    };
    let raf = 0;
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 3}px,${y - 3}px,0)`;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px,${ry - 18}px,0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[90] hidden md:block size-9 rounded-full border border-primary/60 transition-[width,height,background] duration-200 ${
          hover ? "bg-primary/15 scale-150" : ""
        }`}
        style={{ boxShadow: "0 0 24px oklch(0.78 0.18 210 / 0.55)" }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden md:block size-1.5 rounded-full bg-primary"
      />
    </>
  );
}