import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCloudinary,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      description:
        "Modern interfaces and application development with the React ecosystem.",
      columns: "lg:col-span-2",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Context API", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
      ],
    },
    {
      title: "Backend",
      description:
        "APIs, authentication, authorization, and server-side application logic.",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <FaDatabase /> },
        { name: "JWT", icon: <FaDatabase /> },
        { name: "bcrypt", icon: <FaDatabase /> },
        { name: "Multer", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Database & Storage",
      description: "Data management, ODMs, file handling, and cloud storage.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <FaDatabase /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "Cloudinary", icon: <SiCloudinary /> },
      ],
    },
    {
      title: "Tools & Deployment",
      description:
        "Version control, hosting, deployment, and production workflows.",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Vercel", icon: <FaDatabase /> },
        { name: "Render", icon: <FaDatabase /> },
        { name: "Railway", icon: <FaDatabase /> },
        { name: "npm", icon: <FaNodeJs /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="border-b border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <span className="section-label">Skills & Technologies</span>

          <h2 className="section-title">
            The technologies I use to build complete applications.
          </h2>

          <p className="section-description">
            A practical development stack covering frontend, backend, databases,
            deployment, and modern application tooling.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={`rounded-2xl border border-portfolio-border bg-portfolio-surface p-6 sm:p-7 ${category.columns || ""} dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface`}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-portfolio-text dark:text-portfolio-dark-text">
                  {category.title}
                </h3>

                <p className="mt-1 max-w-xl text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                  {category.description}
                </p>
              </div>

              {/* Skills */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className="group inline-flex items-center gap-2.5 rounded-lg border border-portfolio-border bg-portfolio-bg px-3.5 py-2.5 transition-all duration-200 hover:border-portfolio-primary/40 hover:bg-portfolio-primary-light dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:hover:border-[#496956] dark:hover:bg-[#1d3025]"
                  >
                    <span className="text-base text-portfolio-text-muted transition-colors duration-200 group-hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:group-hover:text-[#8fbea2]">
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* AI Integration */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5 rounded-2xl border border-portfolio-primary/20 bg-portfolio-primary-light p-6 sm:p-7 dark:border-[#496956]/50 dark:bg-[#17241c]"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-primary dark:text-[#8fbea2]">
                AI Integration
              </p>

              <h3 className="mt-2 text-lg font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                Integrating AI into real-world applications.
              </h3>

              <p className="mt-2 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Experience integrating Gemini and AI APIs into full-stack
                applications for features such as task generation, task
                descriptions, project summaries, and converting meeting notes
                into actionable tasks.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-2">
              <span className="tech-badge">Gemini AI</span>
              <span className="tech-badge">AI APIs</span>
              <span className="tech-badge">API Integration</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
