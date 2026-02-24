import { useState, useEffect } from "react";

export const useScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    //Agregamos desplazamiento suave al hacer scroll
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return showScrollToTop;
};
