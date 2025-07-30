function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-16 bg-gray-50 text-gray-800 text-center"
      data-aos="fade-up"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-700">
          Contact Me
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <p className="mt-4 text-lg font-medium text-purple-600">
          ✉️{" "}
          <a href="mailto:mdshoaib0045@gmail.com" className="hover:underline">
            mdshoaib0045@gmail.com
          </a>
        </p>

        <p className="mt-2 text-lg font-medium text-blue-600">
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/md-shoaib-116238276"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
