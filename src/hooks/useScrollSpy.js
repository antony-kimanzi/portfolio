import { useContext, useEffect } from 'react';
import SectionContext from '../context/SectionContext';
export const useScrollSpy = () => {
  const { setActiveSection } = useContext(SectionContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '0px 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);
};