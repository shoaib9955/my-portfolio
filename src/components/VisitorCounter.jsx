import { useState, useEffect } from "react";

function VisitorCounter({ displayOnly = false }) {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = () => {
      if (displayOnly) {
        // Just display current count without incrementing
        const currentCount = parseInt(
          localStorage.getItem("total_page_visits") || "0",
        );
        setVisitorCount(currentCount);
      } else {
        // Increment count for every visit
        const currentCount = parseInt(
          localStorage.getItem("total_page_visits") || "0",
        );
        const newCount = currentCount + 1;
        localStorage.setItem("total_page_visits", newCount.toString());
        setVisitorCount(newCount);
      }
      setIsLoading(false);
    };

    fetchVisitorCount();
  }, [displayOnly]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-xs">...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
      <div className="flex items-center gap-1">
        <svg
          className="w-4 h-4 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span className="font-mono font-semibold text-[var(--text-primary)]">
          {visitorCount?.toLocaleString() || "0"}
        </span>
        <span className="text-xs">visits</span>
      </div>
    </div>
  );
}

export default VisitorCounter;
