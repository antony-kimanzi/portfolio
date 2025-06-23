import React, { useEffect, useRef } from "react";
import Infobar from "../components/Infobar";
import About from "../components/About";
import Experience from "../components/Experience";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "./Home.css";

function Home() {
  const scrollContainerRef = useRef(null);
  useScrollSpy(); // This handles the active section detection

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll('.section'));
      const scrollPosition = scrollContainer.scrollTop + 100;
      
      // Handle sticky headers
      sections.forEach(section => {
        const header = section.querySelector('.header');
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        header.classList.toggle(
          'sticky', 
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        );
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="body font-[Montserrat] bg-[#0f172a] bg-cover bg-no-repeat bg-fixed bg-center min-h-screen w-full">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Infobar />
        </div>
        <div className="scrollable-section" ref={scrollContainerRef}>
          <div>
            <div id="about" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px]">
                <h3>ABOUT ME</h3>
              </div>
              <div className="pr-[190px] pl-[30px] pt-[30px]">
                <About />
              </div>
            </div>
            <div id="experience" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px]">
                <h3>EXPERIENCE</h3>
              </div>
              <div className="pr-[190px] pl-[30px] pt-[30px]">
                <Experience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;