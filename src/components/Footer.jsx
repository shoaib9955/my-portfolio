import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-primary-900 border-t border-[var(--border-primary)] py-20 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6 text-center md:text-left">
          <motion.h2 variants={itemVariants} className="text-2xl font-bold tracking-tighter text-[var(--text-primary)]">
            MD SHOAIB<span className="text-blue-500"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[var(--text-secondary)] max-w-xs mx-auto md:mx-0">
            Building digital products that combine aesthetic beauty with technical excellence.
          </motion.p>
          <motion.p variants={itemVariants} className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Md Shoaib. All rights reserved.
          </motion.p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-8">
          <motion.div variants={itemVariants} className="flex gap-6">
            <a
              href="https://github.com/shoaib9955"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-[var(--text-secondary)] hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-shoaib-476892321"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-[var(--text-secondary)] hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>

          <motion.button
            variants={itemVariants}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-3 text-sm font-bold text-[var(--text-primary)] uppercase tracking-widest hover:text-blue-500 transition-colors duration-300"
          >
            <span>Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-[var(--border-primary)] flex items-center justify-center group-hover:border-blue-500 transition-colors">
              <FaArrowUp size={12} />
            </div>
          </motion.button>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
