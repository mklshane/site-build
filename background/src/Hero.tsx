import { useState, useEffect, useRef } from "react";

export default function Component() {
  const [dots, setDots] = useState<
    Array<{ x: number; y: number; baseOpacity: number }>>([]);
  

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const animationFrameRef = useRef<number>(0);

  const gridSize = 25;
  const dotRadius = 1.5;
  const hoverRadius = 200;
  const scaleRadius = 140;
  const glowRadius = 200;

  // Generate dot grid
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

      for (let x = 0; x < window.innerWidth + gridSize; x += gridSize) {
        for (let y = 0; y < window.innerHeight + gridSize; y += gridSize) {
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const baseOpacity = Math.max(
            0.05,
            Math.min(0.8, 1 - (distance / maxDistance) * 1.2)
          );
          newDots.push({ x, y, baseOpacity });
        }
      }

      setDots(newDots);
    };

    generateDots();
    window.addEventListener("resize", generateDots);
    return () => window.removeEventListener("resize", generateDots);
  }, []);

  // Mouse tracking with RAF
  useEffect(() => {
    const animate = () => {
      const container = containerRef.current;
      const mouse = mouseRef.current;
      if (!container || !mouse) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const children = container.querySelectorAll<HTMLDivElement>(".dot");

      children.forEach((dotEl, index) => {
        const dot = dots[index];
        if (!dot) return;

        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let opacity = dot.baseOpacity;
        let scale = 1;
        let boxShadow = "none";

        if (distance <= hoverRadius) {
          const hoverIntensity = 1 - distance / hoverRadius;
          const hoverOpacity = hoverIntensity * 0.9;
          opacity = Math.max(dot.baseOpacity, hoverOpacity);

          if (distance <= scaleRadius) {
            const scaleIntensity = 1 - distance / scaleRadius;
            scale = 1 + scaleIntensity * 3;
          }

          if (distance <= glowRadius) {
            const glowIntensity = 1 - distance / glowRadius;
            const glowSize = glowIntensity * 12;
            const glowOpacity = glowIntensity * 0.6;
            boxShadow = `0 0 ${glowSize}px rgba(34, 197, 94, ${glowOpacity})`;
          }
        }

        dotEl.style.opacity = `${opacity}`;
        dotEl.style.transform = `scale(${scale})`;
        dotEl.style.boxShadow = boxShadow;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dots]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const pos = { x: e.clientX, y: e.clientY };
    mouseRef.current = pos;
  };

  const handleMouseLeave = () => {
    mouseRef.current = null;
  };

  return (
    <section id="home">
      <div
        ref={containerRef}
        className="min-h-screen bg-background relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Junior Philippines{" "}
            <span className="text-primary">Computer Society</span>
          </h1>
          <p className="text-2xl md:text-4xl text-foreground mb-8 max-w-2xl">
            De La Salle Lipa Chapter
          </p>
          <button className="px-8 py-3 bg-primary transform hover:scale-110 transition-transform text-primary-foreground font-semibold rounded-lg duration-300">
            Get Started
          </button>
        </div>

        {/* Dot Grid */}
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute dot rounded-full bg-green-400 pointer-events-none will-change-transform transition-opacity duration-150 ease-out"
            style={{
              left: dot.x - dotRadius,
              top: dot.y - dotRadius,
              width: dotRadius * 2,
              height: dotRadius * 2,
              opacity: dot.baseOpacity,
              transform: "scale(1)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
