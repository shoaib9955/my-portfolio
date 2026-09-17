import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaLayerGroup, FaRobot } from "react-icons/fa";

function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const capabilities = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Building responsive interfaces and practical user experiences with React, JavaScript, Tailwind CSS, and modern frontend patterns.",
    },
    {
      icon: FaLayerGroup,
      title: "Backend Development",
      description:
        "Creating REST APIs, authentication, authorization, database systems, and scalable application logic with Node.js, Express, and MongoDB.",
    },
    {
      icon: FaRobot,
      title: "AI Integration",
      description:
        "Integrating AI APIs into full-stack applications to create useful features such as task generation, summaries, and intelligent workflows.",
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Section Heading */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <span className="section-label">About Me</span>

            <h2 className="section-title">
              I build software from the interface to the backend.
            </h2>

            <p className="section-description">
              I'm a Full-Stack JavaScript Developer focused on building
              practical web applications with clean interfaces, reliable backend
              systems, and useful integrations.
            </p>
          </motion.div>

          {/* Main About Content */}
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-base leading-7 text-portfolio-text-muted sm:text-lg sm:leading-8 dark:text-portfolio-dark-text-muted"
            >
              <p>
                I enjoy working across the full development process — from
                designing responsive React interfaces to building the APIs,
                authentication, database models, and application logic behind
                them.
              </p>

              <p>
                My main stack is{" "}
                <span className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                  JavaScript, React, Node.js, Express, and MongoDB
                </span>
                . I also work with tools such as JWT, Mongoose, Tailwind CSS,
                Cloudinary, and REST APIs to build complete applications rather
                than isolated frontend screens.
              </p>

              <p>
                I'm also interested in using AI where it provides real value. My
                experience includes integrating{" "}
                <span className="font-semibold text-portfolio-primary dark:text-[#8fbea2]">
                  AI APIs into full-stack applications
                </span>
                , including the AI features I've built into TaskFlow AI.
              </p>
            </motion.div>

            {/* Quick Facts */}
            <motion.div variants={itemVariants}>
              <div className="portfolio-card p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle">
                  What I focus on
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                      <FaCode className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                        Clean & maintainable code
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                        Structure that is easier to understand, maintain, and
                        extend.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                      <FaLayerGroup className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                        Complete applications
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                        Connecting frontend, backend, databases, APIs, and
                        authentication into one working product.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                      <FaRobot className="h-4 w-4" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                        Practical AI integration
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                        Adding AI capabilities to applications where they
                        improve the product and user workflow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Personal Note */}
          <motion.div
            variants={itemVariants}
            className="mt-14 border-t border-portfolio-border pt-8 dark:border-portfolio-dark-border"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Outside of development, I enjoy training at the gym and
                practicing MMA. Both keep me disciplined, consistent, and
                focused on continuous improvement.
              </p>

              <a
                href="/MERN.NEW_ (2) new.docx.pdf"
                download="Shoaib_Resume.pdf"
                className="secondary-button shrink-0"
              >
                View Resume
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
