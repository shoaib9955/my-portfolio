// src/components/Loading.jsx
import { useEffect } from "react";

function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // remove loading after 2.5s
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-700">
      {/* Professional Welcome Text */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 animate-gradient-x tracking-wide text-center leading-tight">
        Welcome to Shoaib's Portfolio
      </h1>
      <p className="mt-6 text-white/80 text-lg sm:text-xl md:text-2xl text-center animate-fadeIn">
        Showcasing Innovative Web & Mobile Applications
      </p>

      {/* Animations */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
