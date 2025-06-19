import React, { useEffect, useRef } from "react";
import Infobar from "../components/Infobar";
import About from "../components/About";
import Experience from "../components/Experience";
import "./Home.css";

function Home() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about');
      const experienceSection = document.querySelector('#experience');
      
      // Get scroll position relative to the container
      const scrollPosition = scrollContainer.scrollTop + 100;

      if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        document.querySelector('#about .header').classList.add('sticky');
        document.querySelector('#experience .header').classList.remove('sticky');
      } else if (experienceSection && scrollPosition >= experienceSection.offsetTop) {
        document.querySelector('#experience .header').classList.add("sticky");
        document.querySelector('#about .header').classList.remove('sticky');
      } else {
        document.querySelectorAll('.header').forEach(header => header.classList.remove('sticky'));
      }
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
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px] bg-[rgba(15,23,42,0.75)]">
                <h3>ABOUT ME</h3>
              </div>
              <div className="pr-[190px] pl-[30px] pt-[30px]">
                <About />
              </div>
            </div>
            <div id="experience" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px] bg-[rgba(15,23,42,0.75)]">
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