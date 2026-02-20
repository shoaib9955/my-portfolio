import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
      id="about"
      className="relative px-6 py-32 bg-primary-900 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.h3 
              variants={itemVariants}
              className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase"
            >
              Background
            </motion.h3>
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-[var(--text-primary)] leading-[1.1]"
            >
              I solve complex problems through <span className="text-[var(--text-secondary)] italic">elegant</span> software solutions.
            </motion.h2>
          </div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              As a Passionate <span className="text-[var(--text-primary)] font-semibold">Full Stack Engineer</span>, 
              I find joy in the architecture of complex systems and the visual 
              finesse of the frontend. (currently more comfortable with frontends).
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-center md:text-left">
              My journey is driven by a restless curiosity for new technologies 
              and a commitment to writing clean, maintainable, and highly efficient code 
              that makes an impact.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
          >
            <p>
              When I'm not in front of a screen, you can find me at the 
              <span className="text-[var(--text-primary)] italic"> gym 🏋️</span> or practicing 
              <span className="text-[var(--text-primary)] italic"> MMA 🥋</span>. I approach 
              both physical training and coding with the same mindset: 
              continuous improvement and discipline.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent opacity-50"></div>
    </section>
  );
}

export default About;
