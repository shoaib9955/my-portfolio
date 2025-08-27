import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-100 via-white to-purple-100 text-gray-700 py-12 relative">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-lg font-medium">
          © 2025 Md Shoaib. All rights reserved.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/shoaib9955"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-shoaib-116238276"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:mdshoaib0045@gmail.com"
            className="text-purple-600 hover:text-purple-800 transition transform hover:scale-110"
          >
            Email Me
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition transform"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
