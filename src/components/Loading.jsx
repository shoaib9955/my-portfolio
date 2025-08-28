// src/components/Loading.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  const stars = [...Array(40)]; // 40 stars

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Elegant Neon Text */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center tracking-wide leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-500 drop-shadow-[0_0_10px] "
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          Welcome to Shoaib's Portfolio
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-6 text-gray-200/90 text-lg sm:text-xl md:text-2xl text-center tracking-wide drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Showcasing Innovative Web & Mobile Applications
        </motion.p>

        {/* Falling Stars with Glow Trail */}
        {stars.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] opacity-80"
            style={{ left: `${Math.random() * 100}%` }}
            initial={{ y: -10, rotate: 0, opacity: 0 }}
            animate={{
              y: [0, 900],
              rotate: [0, 360],
              opacity: [0, 1, 0],
              boxShadow: ["0 0 2px #fff", "0 0 15px #00fff5", "0 0 2px #fff"],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Pulsating Glowing Orb */}
        <motion.div
          className="absolute w-44 h-44 bg-cyan-400 rounded-full filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default Loading;
