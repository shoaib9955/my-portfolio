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
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-black">
      {/* Royal Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient-x tracking-wide text-center leading-tight drop-shadow-2xl">
        Welcome to Shoaib's Portfolio
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-yellow-200/90 text-lg sm:text-xl md:text-2xl text-center animate-fadeIn tracking-wide">
        Showcasing Innovative Web & Mobile Applications
      </p>

      {/* Twinkling Stars / Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-yellow-300 rounded-full absolute animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

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
            0% { opacity: 0; transform: translateY(15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease forwards;
          }

          @keyframes star {
            0%, 100% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .animate-star {
            animation: star infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
}

export default Loading;
