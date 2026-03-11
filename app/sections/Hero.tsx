"use client";

import { motion } from "framer-motion";
import { ArrowDown, User } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Check if image exists
    const img = new window.Image();
    img.src = "/avatar.jpg";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  const handleScrollToAbout = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                {!imageError ? (
                  <Image
                    src="/avatar.jpg"
                    alt="林超"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 text-white/60 mb-1" />
                    <span className="text-xs text-white/40">添加头像</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-[#a1a1a6] text-sm sm:text-base tracking-widest uppercase mb-6"
        >
          资深产品经理 | 数据保护与存储解决方案
        </motion.p>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          林超 (Aaron)
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            11项美国专利持有者
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#a1a1a6] text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          资深产品经理，拥有11项美国发明专利，18年IT/软件行业经验。
          专注于数据保护、企业级存储解决方案，曾在DellEMC和华为担任核心角色，
          管理数十亿美元规模的全球产品组合。
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleScrollToAbout}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-[#f5f5f7] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解我的经历
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "18+", label: "年行业经验" },
            { value: "11", label: "美国专利" },
            { value: "10+", label: "年数据保护深耕" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#a1a1a6]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[rgba(255,255,255,0.2)] rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
