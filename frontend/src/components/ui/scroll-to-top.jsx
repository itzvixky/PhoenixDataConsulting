import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "./button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={`
  fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full p-0 shadow-lg
  bg-gradient-to-r from-gray-600  to-gray-900
  text-white hover:from-gray-900 hover:to-gray-600
  transition-all duration-300 ease-in-out
  ${
    isVisible
      ? "opacity-100 scale-100"
      : "opacity-0 scale-75 pointer-events-none"
  }
`}
      size="sm"
    >
      <ChevronUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;
