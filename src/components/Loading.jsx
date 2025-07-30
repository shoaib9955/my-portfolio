// src/components/Loading.jsx
import { useEffect, useState } from "react";

function Loading({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // notify App to remove loading
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center z-[9999]">
      <h1 className="text-white text-3xl sm:text-5xl font-bold animate-pulse tracking-wider">
        Welcome to my Portfolio
      </h1>
    </div>
  );
}

export default Loading;
