import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const coreRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let running = true;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update);
    };

    const update = () => {
      rafRef.current = null;
      if (!running) return;

      const { x, y } = posRef.current;
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;

      if (coreRef.current) coreRef.current.style.transform = transform;
      if (glowRef.current) glowRef.current.style.transform = transform;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      running = false;
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Core Dot */}
      <div
        ref={coreRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 will-change-transform"
        style={{
          left: 0,
          top: 0,
          transform: "translate3d(-9999px, -9999px, 0)"
        }}
      >
        <div className="w-full h-full bg-primary rounded-full" />
      </div>

      {/* Glow (Inner + Outer) */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998] will-change-transform w-[300px] h-[300px]"
        style={{
          left: 0,
          top: 0,
          transform: "translate3d(-9999px, -9999px, 0)"
        }}
      >
        {/* Inner bright glow */}
        <div className="absolute inset-0 m-auto w-[140px] h-[140px] bg-primary/50 rounded-full blur-[40px]" />

        {/* Outer soft halo */}
        <div className="absolute inset-0 m-auto w-[300px] h-[300px] bg-primary/20 rounded-full blur-[120px]" />
      </div>
    </>
  );
};

export default CustomCursor;
