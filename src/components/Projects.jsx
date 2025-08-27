import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-800 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-yellow-300 rounded-full absolute animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-purple-700">
          Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/30 p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out group relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-300 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500"></div>

              <h3 className="text-xl font-semibold mb-3 text-purple-800 z-10 relative">
                {project.title}
              </h3>
              <p className="mb-5 z-10 relative">{project.description}</p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start z-10 relative">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300 font-semibold"
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
                {project.apk && (
                  <a
                    href={project.apk}
                    download
                    className="bg-gradient-to-r from-green-500 to-green-400 text-white px-5 py-2 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
                  >
                    Download APK
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
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

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(0.5); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
