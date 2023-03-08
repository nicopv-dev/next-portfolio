import { useState, useEffect } from "react";

export default function useScroll() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrollActive, setIsScrollActive] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setIsScrollActive(isScrolled);
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition, isScrollActive };
}
