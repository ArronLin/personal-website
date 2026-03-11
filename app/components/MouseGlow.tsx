"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [x, y, isVisible]);

  return (
    <>
      {/* Main glow */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Small cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-[100px] h-[100px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </motion.div>
    </>
  );
}
