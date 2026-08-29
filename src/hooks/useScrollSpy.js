import { useContext, useEffect } from "react";
import SectionContext from "../context/SectionContext";

export const useScrollSpy = () => {
  const { setActiveSection } = useContext(SectionContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = { ratio: 0, id: "" };

        entries.forEach((entry) => {
          const header = entry.target.querySelector(".header");
          if (header) {
            // Check if the top is exactly at viewport top
            const isAtTop = Math.abs(entry.boundingClientRect.top) <= 1;
            header.classList.toggle("sticky-top", isAtTop);
            header.classList.toggle(
              "sticky-blur",
              entry.isIntersecting && !isAtTop
            );
          }

          if (entry.intersectionRatio > mostVisible.ratio) {
            mostVisible = {
              ratio: entry.intersectionRatio,
              id: entry.target.id,
            };
          }
        });

        if (mostVisible.id) {
          setActiveSection(mostVisible.id);
        }
      },
      {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: "-100px 0px -100px 0px",
      }
    );

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
};
