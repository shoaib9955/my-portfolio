import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-surface text-portfolio-text-muted shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-portfolio-primary hover:text-portfolio-primary sm:bottom-8 sm:right-8 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface dark:text-portfolio-dark-text-muted dark:hover:border-[#496956] dark:hover:text-[#8fbea2]"
      aria-label="Back to top"
      title="Back to top"
    >
      <FaArrowUp className="h-3.5 w-3.5" />
    </button>
  );
}

export default BackToTop;
