import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 bg-gradient-to-br from-white via-purple-50 to-white text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-purple-700">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/40 p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-2xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-800">
                {project.title}
              </h3>
              <p className="mb-4">{project.description}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-700 font-medium hover:underline"
                >
                  <FaGithub size={18} /> GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🔗 GitHub Profile Link */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-lg text-gray-700 mb-2">
            Want to explore more of my work?
          </p>
          <a
            href="https://github.com/shoaib9955"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-700 font-semibold text-lg hover:underline"
          >
            <FaGithub size={20} /> Visit my GitHub profile →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
