import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaAndroid,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-600" /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-blue-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        {
          name: "Android Studio",
          icon: <FaAndroid className="text-green-600" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-16 bg-gradient-to-br from-white via-purple-50 to-white text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-700">
          My Skills
        </h2>

        <div className="space-y-16">
          {categories.map((category, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <h3 className="text-2xl font-semibold text-purple-600 mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl shadow-xl border border-white/30 bg-white/40 backdrop-blur-lg 
                    transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:shadow-purple-300/40"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    aria-label={skill.name}
                  >
                    <div className="text-4xl relative">
                      {/* Glow behind icon */}
                      <div className="absolute inset-0 rounded-full blur-xl bg-purple-300 opacity-20 scale-90 transition-all duration-500 group-hover:scale-110"></div>
                      <div className="relative z-10">{skill.icon}</div>
                    </div>
                    <p className="text-md font-semibold">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
