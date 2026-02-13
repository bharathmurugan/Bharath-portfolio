"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="hidden md:block fixed w-6 h-6 rounded-full border-2 border-indigo-400 pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        left: position.x - 12,
        top: position.y - 12,
      }}
    />
  );
}
