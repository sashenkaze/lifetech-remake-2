import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Fade in on mount and route change
    setIsVisible(true);
  }, [location]);

  return (
    <div
      className={`fixed inset-0 bg-white pointer-events-none transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-0" : "opacity-100"
      }`}
    />
  );
}
