import { motion } from "framer-motion";

function Contact() {
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="bg-primary-900 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)]"
            >
              Let's create something <br />
              <span className="text-blue-500 italic">remarkable</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-[var(--text-secondary)] text-lg md:text-xl max-w-md leading-relaxed"
            >
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your vision.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4 pt-4"
            >
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary-700 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-lg">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-widest">Email Me</p>
                  <a href="mailto:mdshoaib0045@gmail.com" className="text-[var(--text-primary)] font-medium hover:text-blue-500 transition-colors">
                    mdshoaib0045@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Professional Contact Card */}
            <div className="p-10 lg:p-12 rounded-[3.5rem] bg-primary-800 border border-[var(--border-primary)] relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500"></div>
              
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">LinkedIn Profile</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Connect with me on LinkedIn for professional updates, 
                networking, and a more detailed look at my career history.
              </p>
              
              <a
                href="https://www.linkedin.com/in/md-shoaib-476892321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary-900)] font-bold rounded-full hover:opacity-90 transition-all duration-300 w-full justify-center shadow-xl group-hover:scale-[1.02] transition-transform"
              >
                View LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
