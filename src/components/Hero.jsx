import myPhoto from "../assets/shoaib3.jpeg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 to-purple-800 text-white px-6 py-12 overflow-hidden"
    >
      {/* Background Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-yellow-300 rounded-full absolute animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left: Text */}
        <div
          className="backdrop-blur-lg bg-white/10 p-10 rounded-2xl shadow-2xl border border-white/20"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-gradient-x"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Hi, I'm <span className="text-red-300">MD Shoaib</span>
          </h2>

          <p
            className="text-xl md:text-2xl font-bold mb-6 text-left text-purple-200 drop-shadow-md"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Frontend Engineer
          </p>

          <p
            className="text-base md:text-lg leading-relaxed text-left text-white/90"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            I craft fast, accessible, and visually striking web interfaces using
            React and Tailwind CSS. I focus on clean, responsive designs that
            deliver seamless experiences across all devices, blending
            performance, usability, and style to bring ideas to life.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            View Projects
          </a>
        </div>

        {/* Right: Image with Floating Accents */}
        <div
          className="relative flex justify-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {/* Floating Glowing Particles around Image */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-400 rounded-full opacity-70 animate-orbit"
              style={{
                top: `${50 + 15 * Math.sin((i / 8) * Math.PI * 2)}%`,
                left: `${50 + 15 * Math.cos((i / 8) * Math.PI * 2)}%`,
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}

          <img
            src={myPhoto}
            alt="MD Shoaib"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20 hover:scale-110 hover:shadow-3xl transition-transform duration-500 relative z-10"
          />
        </div>
      </div>

      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(0.5); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow infinite ease-in-out;
          }

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
          }
          .animate-orbit {
            animation: orbit linear infinite;
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
