function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 bg-gradient-to-br from-white via-pink-50 to-red text-gray-800 flex justify-center items-center"
      data-aos="fade-right"
    >
      <div className="max-w-4xl w-full backdrop-blur-lg bg-white/40 p-10 rounded-xl shadow-xl border border-white/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700 text-center md:text-left">
          About Me
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-center md:text-left ">
          I’m <strong className="text-red-500">MD Shoaib</strong>, a self-taught
          frontend developer with a strong grip on{" "}
          <strong className="text-purple-500">
            {" "}
            HTML, CSS, JavaScript, React, and Tailwind
          </strong>
          . I love turning ideas into interactive, user-friendly, and
          pixel-perfect websites. My passion lies in crafting clean UIs and
          solving real-world problems through code.
        </p>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-center md:text-left">
          Outside of coding, I’m into <strong>gym 🏋️</strong>,{" "}
          <strong>MMA 🥋</strong>, and always curious about{" "}
          <strong>learning new things 📚</strong>. Whether it’s web tech or
          martial arts, I enjoy pushing my limits and growing every day.
        </p>
      </div>
    </section>
  );
}

export default About;
