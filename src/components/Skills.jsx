import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaMobileAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript } from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend Mastery",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaDatabase /> },
        { name: "Git", icon: <FaGithub /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="bg-primary-900 py-32">
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
            Technical Arsenal<span className="text-blue-500"></span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0"
          >
            A specialized collection of tools and technologies I use to bring
            complex ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {categories.map((category, i) => (
            <div key={i}>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-sm font-mono text-blue-500 tracking-[0.3em] uppercase mb-10 text-center lg:text-left"
              >
                {category.title}
              </motion.h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-primary-800 border border-[var(--border-primary)] hover:border-blue-500/30 transition-all duration-300 group shadow-lg shadow-black/5"
                  >
                    <div className="text-4xl text-[var(--text-secondary)] group-hover:text-blue-500 transition-colors duration-300 mb-4">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium tracking-wider text-[var(--text-secondary)] uppercase group-hover:text-blue-500 transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
