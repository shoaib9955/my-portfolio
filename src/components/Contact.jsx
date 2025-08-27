function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-r from-purple-100 to-purple-50 text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-700 drop-shadow-md">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl mb-12 text-gray-700">
          Have a question or want to collaborate? I’d love to hear from you.
          Reach out via email or connect on LinkedIn!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Email Card */}
          <a
            href="mailto:mdshoaib0045@gmail.com"
            className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform"
          >
            <p className="text-2xl">✉️</p>
            <h3 className="mt-4 text-xl font-semibold text-purple-700">
              Email Me
            </h3>
            <p className="mt-2 text-gray-600 hover:underline">
              mdshoaib0045@gmail.com
            </p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/md-shoaib-116238276"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform"
          >
            <p className="text-2xl">🔗</p>
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              LinkedIn
            </h3>
            <p className="mt-2 text-gray-600 hover:underline">
              View my profile
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
