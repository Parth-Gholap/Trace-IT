"use client";

import React, { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
};

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
};

export default function FoxyHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particlesRef = useRef<Particle[]>([]);
  const starsRef = useRef<Star[]>([]);

  const [mousePosition, setMousePosition] = useState({ 
  x: typeof window !== 'undefined' ? window.innerWidth / 2 : 400, 
  y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300 
});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Initialize particles
    const particles: Particle[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    particlesRef.current = particles;

    // Initialize stars
    const stars: Star[] = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
      });
    }

    starsRef.current = stars;

    // Animation loop
    const animate = () => {
      if (!canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const stars = starsRef.current;

      // Draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.opacity *= 0.99;

        if (particle.opacity < 0.01) {
          particles[index] = {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
          };
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${particle.opacity})`;
        ctx.fill();
      });

      // Draw stars
      stars.forEach((star) => {
        star.opacity *= 0.995;

        if (star.opacity < 0.01) {
          star.x = Math.random() * window.innerWidth;
          star.y = Math.random() * window.innerHeight;
          star.opacity = Math.random() * 0.8 + 0.2;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      // Ambient lighting effect
      const gradient = ctx.createRadialGradient(
        mousePosition.x || window.innerWidth / 2,
        mousePosition.y || window.innerHeight / 2,
        0,
        mousePosition.x || window.innerWidth / 2,
        mousePosition.y || window.innerHeight / 2,
        200
      );

      gradient.addColorStop(0, "rgba(0,229,255,0.1)");
      gradient.addColorStop(0.5, "rgba(124,77,255,0.05)");
      gradient.addColorStop(1, "rgba(0,229,255,0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "transparent" }}
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              TraceIT
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Reconnect with your belongings through community participation
          </p>
        </div>
      </div>
    </div>
  );
}
