// src/components/Starfield.jsx
import React, { useRef, useEffect } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const w = canvas.width;
    const h = canvas.height;

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2 + 1,
    }));

    function animate() {
      c.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        c.fillStyle = "rgba(255,255,255,0.8)";
        c.beginPath();
        c.arc(s.x, s.y, s.z, 0, Math.PI * 2);
        c.fill();

        s.y += s.z * 0.6;

        if (s.y > h) {
          s.y = 0;
          s.x = Math.random() * w;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
}
