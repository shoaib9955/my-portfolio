import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: "Portfolio Contact Form Message",
        time: new Date().toLocaleString(),
        message: formData.message,
      };

      const result = await emailjs.send(
        "service_1mzpxjz",
        "template_mlsczol",
        templateParams,
        "CjflF_Zmx3Q7ZY1lm",
      );

      if (result.status === 200) {
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants}>
            <span className="section-label">Contact</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="section-title">
            Let's talk about your next project.
          </motion.h2>

          <motion.p variants={itemVariants} className="section-description">
            Have an idea, opportunity, or project you'd like to discuss? Send me
            a message and I'll get back to you.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="portfolio-card p-7 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle">
              Get in touch
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-portfolio-text dark:text-portfolio-dark-text">
              Have something in mind?
            </h3>

            <p className="mt-4 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
              I'm open to discussing development opportunities, freelance
              projects, collaborations, and interesting ideas.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                  <FaEnvelope className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-text-subtle">
                    Email
                  </p>

                  <a
                    href="mailto:mdshoaib0045@gmail.com"
                    className="mt-1 block break-all text-sm font-medium text-portfolio-text transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text dark:hover:text-[#8fbea2]"
                  >
                    mdshoaib0045@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                  <FaLinkedin className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-text-subtle">
                    LinkedIn
                  </p>

                  <a
                    href="https://www.linkedin.com/in/md-shoaib-476892321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-portfolio-text transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text dark:hover:text-[#8fbea2]"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary dark:bg-[#1d3025] dark:text-[#8fbea2]">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-text-subtle">
                    Availability
                  </p>

                  <p className="mt-1 text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Small Availability Note */}
            <div className="mt-9 border-t border-portfolio-border pt-6 dark:border-portfolio-dark-border">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-portfolio-primary dark:bg-[#72b58d]" />

                <span className="text-xs font-medium text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                  Currently open to new opportunities
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="portfolio-card p-7 sm:p-8"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle">
                  Send a message
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-portfolio-text dark:text-portfolio-dark-text">
                  Start a conversation
                </h3>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-lg bg-portfolio-primary-light text-portfolio-primary sm:flex dark:bg-[#1d3025] dark:text-[#8fbea2]">
                <FaEnvelope className="h-4 w-4" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-portfolio-border bg-portfolio-bg px-4 py-3 text-sm text-portfolio-text placeholder:text-portfolio-text-subtle transition-all duration-200 focus:border-portfolio-primary focus:outline-none focus:ring-2 focus:ring-portfolio-primary/15 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-text-muted"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-portfolio-border bg-portfolio-bg px-4 py-3 text-sm text-portfolio-text placeholder:text-portfolio-text-subtle transition-all duration-200 focus:border-portfolio-primary focus:outline-none focus:ring-2 focus:ring-portfolio-primary/15 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-text-muted"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-portfolio-text dark:text-portfolio-dark-text"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full resize-y rounded-lg border border-portfolio-border bg-portfolio-bg px-4 py-3 text-sm leading-6 text-portfolio-text placeholder:text-portfolio-text-subtle transition-all duration-200 focus:border-portfolio-primary focus:outline-none focus:ring-2 focus:ring-portfolio-primary/15 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text dark:placeholder:text-portfolio-dark-text-muted"
                />
              </div>

              {/* Status */}
              {submitStatus === "success" && (
                <div className="mt-5 rounded-lg border border-portfolio-primary/20 bg-portfolio-primary-light px-4 py-3 dark:border-[#496956]/50 dark:bg-[#17241c]">
                  <p className="text-sm font-medium text-portfolio-primary dark:text-[#8fbea2]">
                    Message sent successfully. I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 dark:border-red-900/50 dark:bg-red-950/20">
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    Something went wrong while sending your message. Please try
                    again.
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
