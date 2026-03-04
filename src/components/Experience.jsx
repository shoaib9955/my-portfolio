import { motion } from "framer-motion";
import experience from "../data/experience.js";

function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="bg-primary-900 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-[var(--text-primary)] mb-4"
          >
            Professional Journey<span className="text-blue-500"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0"
          >
            A chronological look at my career path and the impactful roles I've
            held in the industry.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 p-8 lg:p-12 rounded-[2.5rem] bg-primary-800 border border-[var(--border-primary)] hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-black/5"
            >
              <div className="lg:col-span-1">
                <span className="text-sm font-mono text-blue-500 tracking-wider uppercase">
                  {exp.period}
                </span>
                <h4 className="text-[var(--text-primary)] font-medium mt-2">
                  {exp.location}
                </h4>
              </div>

              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-blue-500 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-[var(--text-secondary)] font-medium">
                    {exp.company}
                  </p>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex gap-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300"
                    >
                      <span className="text-blue-500 shrink-0 select-none">
                        /
                      </span>
                      <p className="leading-relaxed">{resp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
