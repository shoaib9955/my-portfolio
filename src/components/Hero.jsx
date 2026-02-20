import myPhoto from "../assets/shoaib3.jpeg";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary-900 px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Sophisticated Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h2 
              variants={itemVariants}
              className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              Available for new projects
            </motion.h2>
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-[var(--text-primary)]"
            >
              Designing <br />
              <span className="text-[var(--text-secondary)] italic">Digital</span> <br />
              Experiences
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed"
          >
            Hi, I'm <span className="text-[var(--text-primary)] font-semibold">MD Shoaib</span>. 
            A <span className="text-gradient">Full Stack Engineer</span> with a deep passion for building 
            high-performance web applications (currently more comfortable with frontends).
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary-900)] font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-xl"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-[var(--text-primary)] font-bold rounded-full border border-[var(--border-primary)] hover:bg-[var(--bg-primary-800)] transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="relative group">
            {/* Subtle Frame */}
            <div className="absolute -inset-4 border border-[var(--border-primary)] rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-[2rem] border border-[var(--border-primary)] shadow-2xl">
              <img
                src={myPhoto}
                alt="MD Shoaib"
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1] hover:scale-110 hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Floating Info Tag */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-primary-800 border border-[var(--border-primary)] backdrop-blur-xl p-4 rounded-2xl shadow-2xl hidden md:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">Full Stack Intern @ Dehix</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
