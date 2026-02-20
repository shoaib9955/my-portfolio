import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/shoaib-logo.png";

function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExitStarted, setIsExitStarted] = useState(false);

  useEffect(() => {
    const duration = 2500; 
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExitStarted(true);
            setTimeout(onFinish, 1000); 
          }, 400); 
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-[9999] bg-primary-900 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-30">
          <motion.div
            className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-600 rounded-full blur-[140px]"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-purple-600 rounded-full blur-[140px]"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Iris Exit Transition Elements */}
        {isExitStarted && (
          <div className="absolute inset-0 z-[100] pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-1/2 bg-primary-900"
              initial={{ transform: "translateY(-100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1/2 bg-primary-900"
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-16 flex items-center justify-center">
            {/* Professional Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-24 h-24 md:w-32 md:h-32"
            >
               <img 
                 src={logo} 
                 alt="Logo" 
                 className="w-full h-full object-contain rounded-full border-2 border-blue-500/20 p-2 bg-primary-800 shadow-2xl"
               />
               
               {/* Orbital Ring Animation */}
               <motion.div 
                 className="absolute -inset-4 border border-blue-500/30 rounded-full"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute -inset-8 border border-purple-500/10 rounded-full"
                 animate={{ rotate: -360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               />
            </motion.div>
            
            {/* Animated Glow behind Logo */}
            <motion.div
              className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-150"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Impactful Progress Display */}
          <div className="flex flex-col items-center space-y-6">
             <div className="relative w-80 h-[2px] bg-[var(--border-primary)] rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
             </div>
             
             <div className="flex justify-between w-80 font-mono text-[10px] tracking-[0.4em] text-[var(--text-secondary)] uppercase">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Syncing Systems
                </motion.span>
                <motion.span>
                  {Math.round(progress)}%
                </motion.span>
             </div>
          </div>
        </div>

        {/* Dynamic Tagline staggered entrance */}
        <div className="absolute bottom-16 overflow-hidden">
           <motion.p
            className="text-[10px] font-mono tracking-[0.6em] text-[var(--text-secondary)] uppercase"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
           >
            Building the Future of Tech
           </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loading;
