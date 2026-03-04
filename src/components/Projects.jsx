import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { useState } from "react";
import { projects } from "../data/projects";

function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web", "mobile", "ecommerce"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    const title = project.title.toLowerCase();
    const description = project.description.toLowerCase();

    if (filter === "web")
      return title.includes("web") || description.includes("web");
    if (filter === "mobile")
      return (
        title.includes("app") ||
        description.includes("app") ||
        title.includes("mobile")
      );
    if (filter === "ecommerce")
      return title.includes("ecommerce") || description.includes("ecommerce");
    return true;
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="bg-primary-900 py-32">
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
            Selected Works<span className="text-blue-500"></span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-lg mx-auto lg:mx-0"
          >
            A showcase of digital products I've built, ranging from mobile
            applications to complex web platforms.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-primary-800 text-[var(--text-secondary)] hover:bg-primary-700 hover:text-[var(--text-primary)] border border-[var(--border-primary)]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] bg-primary-800 border border-[var(--border-primary)] hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-black/5"
            >
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed line-clamp-4 group-hover:text-[var(--text-primary)] transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary-900)] text-sm font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-xl"
                    >
                      Live Demo <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-700 text-[var(--text-primary)] text-sm font-bold rounded-full border border-[var(--border-primary)] hover:bg-primary-800 transition-all duration-300"
                  >
                    GitHub <FaGithub size={14} />
                  </a>
                  {project.apk && (
                    <a
                      href={project.apk}
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 text-green-500 text-sm font-bold rounded-full border border-green-500/20 hover:bg-green-500/20 transition-all duration-300"
                    >
                      Download APK <FaDownload size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative Index */}
              <div className="absolute top-8 right-8 text-[var(--text-primary)] opacity-5 text-8xl font-bold select-none group-hover:opacity-10 transition-opacity duration-500 uppercase italic">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-[var(--border-primary)] text-center space-y-6 shadow-2xl shadow-black/5"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-[var(--text-secondary)]"
          >
            Looking for more? Explore my full repository of projects.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            href="https://github.com/shoaib9955"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--text-primary)] text-[var(--bg-primary-900)] font-bold rounded-full hover:opacity-90 transition-all duration-300 shadow-xl"
          >
            Visit GitHub Profile <FaGithub size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
