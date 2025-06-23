import { useContext, useEffect } from 'react';
import SectionContext from '../context/SectionContext';

export const useScrollSpy = () => {
  const { setActiveSection } = useContext(SectionContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisible = { ratio: 0, id: '' };
        
        entries.forEach((entry) => {
          if (entry.intersectionRatio > mostVisible.ratio) {
            mostVisible = {
              ratio: entry.intersectionRatio,
              id: entry.target.id
            };
          }
        });

        if (mostVisible.id) {
          setActiveSection(mostVisible.id);
        }
      },
      { 
        threshold: [0.1, 0.5, 0.9], // Multiple thresholds for better detection
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);
};