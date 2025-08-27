function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 flex justify-center items-center"
      data-aos="fade-right"
    >
      <div className="max-w-4xl w-full backdrop-blur-lg bg-white/50 p-12 rounded-2xl shadow-2xl border border-white/30 transition hover:shadow-3xl hover:scale-[1.02] duration-300">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-700 text-center md:text-left drop-shadow-md">
          About Me
        </h2>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-center md:text-left mb-6">
          I’m <strong className="text-pink-600">MD Shoaib</strong>, a
          self-taught developer with strong skills in{" "}
          <strong className="text-purple-600">
            HTML, CSS, JavaScript, React, and Tailwind
          </strong>
          . I love transforming ideas into interactive, user-friendly, and
          pixel-perfect websites. My passion lies in crafting clean UIs and
          solving real-world problems through code.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-800 text-center md:text-left">
          Outside of coding, I enjoy{" "}
          <strong className="text-green-600">gym 🏋️</strong>,{" "}
          <strong className="text-red-500">MMA 🥋</strong>, and I’m always
          curious about{" "}
          <strong className="text-blue-600">learning new things 📚</strong>.
          Whether it’s web tech or martial arts, I enjoy pushing my limits and
          growing every day.
        </p>
      </div>
    </section>
  );
}

export default About;
