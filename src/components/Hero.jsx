import myPhoto from "../assets/Shoaib3.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div
          className="backdrop-blur-lg bg-white/10 p-10 rounded-xl shadow-lg border border-white/20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Hi, I'm <span className="text-red-300">MD Shoaib</span>
          </h2>

          <p
            className="text-lg md:text-xl font-bold mb-6 text-left  "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Frontend Engineer
          </p>

          <p
            className="text-base md:text-lg leading-relaxed text-left"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I build fast, accessible, and beautiful user interfaces using modern
            web technologies like React, Tailwind, and GSAP.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            View Projects
          </a>
        </div>

        {/* Right: Image */}
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src={myPhoto}
            alt="MD Shoaib"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
