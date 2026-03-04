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
              I build software that solves problems in a simple and clean way.
            </motion.h2>
          </div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              As a{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Full Stack Developer
              </span>
              , I enjoy building both the backend systems and frontend
              interfaces. I'm more comfortable with frontend work.
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-center md:text-left">
              I'm always curious about new technologies and focused on writing
              clean, efficient code that works well.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-8 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
          >
            <p>
              When I'm not coding, I like to go to the
              <span className="text-[var(--text-primary)] italic">
                {" "}
                gym 🏋️
              </span>{" "}
              and practice
              <span className="text-[var(--text-primary)] italic"> MMA 🥋</span>
              . Both activities help me stay disciplined and keep improving.
            </p>

            <motion.a
              href="/MERN.NEW_ (2) new.docx.pdf"
              download="Shoaib_Resume.pdf"
              variants={itemVariants}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--border-primary)] to-transparent opacity-50"></div>
    </section>
  );
}

export default About;
