import React, { useEffect, useRef, useState } from "react";
import Infobar from "../components/Infobar";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import { useScrollSpy } from "../hooks/useScrollSpy";
import "./Home.scss";
import Socials from "../components/Socials";
import Projects from "../components/Projects";

function Home() {
  const scrollContainerRef = useRef(null);
  const interBubbleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });
  useScrollSpy(); // This handles the active section detection
  const isMobile = window.innerWidth < 1181;

  // Handle scroll for sticky headers
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      const sections = Array.from(document.querySelectorAll(".section"));
      const scrollPosition = scrollContainer.scrollTop;

      sections.forEach((section) => {
        const header = section.querySelector(".header");
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if header is exactly at the top (with 1px tolerance)
        const isAtTop = Math.abs(scrollPosition - sectionTop) <= 1;

        // Check if header is in sticky range but not at top
        const isSticky =
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight;

        header.classList.toggle("sticky-top", isAtTop);
        header.classList.toggle("sticky-blur", isSticky && !isAtTop);
      });
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse movement for interactive bubble
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate bubble position
  useEffect(() => {
    const animate = () => {
      setBubblePosition((prev) => {
        const newX = prev.x + (mousePosition.x - prev.x) / 1;
        const newY = prev.y + (mousePosition.y - prev.y) / 1;
        return { x: newX, y: newY };
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  return (
    <div className="home-container">
      {/* Background gradients */}
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {isMobile ? (
        <>
          <div className="gradients-container-mobile">
            {/* <div className="g2-mobile"></div>
            <div className="g3-mobile"></div> */}
            <div
              className="interactive-mobile"
              ref={interBubbleRef}
              style={{
                transform: `translate(${bubblePosition.x}px, ${bubblePosition.y}px)`,
              }}
            ></div>
          </div>
          <div className="scrollable-section-mobile" ref={scrollContainerRef}>
            <div className="infobar-wrapper-mobile">
              <Infobar />
            </div>
            <div id="about" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[16px]">
                <h3>ABOUT ME</h3>
              </div>
              <div className="px-[16px] pt-[30px] z-[99]">
                <About />
              </div>
            </div>
            <div id="experience" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[16px]">
                <h3>EXPERIENCE</h3>
              </div>

              <div className="px-[16px] pt-[30px] z-[99]">
                <Experience />
              </div>
            </div>
            <div id="projects" className="section">
              <div className="header text-[#e2e8f0] text-[14px] w-full pt-[40px] pb-[20px] pl-[16px]">
                <h3>PROJECTS</h3>
              </div>

              <div className="px-[16px] pt-[30px] z-[99]">
                <Projects />
              </div>
            </div>
            <div className="pr-[100px] pl-[30px] py-[80px] z-[99]">
              <Socials />
            </div>
            <div className="pr-[100px] pl-[30px] py-[80px] z-[99]">
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="gradients-container">
            {/* <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div> */}
            <div
              className="interactive"
              ref={interBubbleRef}
              style={{
                transform: `translate(${bubblePosition.x}px, ${bubblePosition.y}px)`,
              }}
            ></div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="infobar-wrapper">
              <Infobar />
            </div>
            <div className="scrollable-section" ref={scrollContainerRef}>
              <div id="about" className="section">
                <div className="header text-[#fff] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px]">
                  <h3>ABOUT ME</h3>
                </div>
                <div className="pr-[190px] pl-[30px] pt-[30px] z-[99]">
                  <About />
                </div>
              </div>
              <div id="experience" className="section">
                <div className="header text-[#fff] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px]">
                  <h3>EXPERIENCE</h3>
                </div>
                <div className="pr-[190px] pl-[30px] pt-[30px] z-[99]">
                  <Experience />
                </div>
              </div>
              <div id="projects" className="section">
                <div className="header text-[#fff] text-[14px] w-full pt-[40px] pb-[20px] pl-[30px]">
                  <h3>PROJECTS</h3>
                </div>
                <div className="pr-[190px] pl-[30px] pt-[30px] z-[99]">
                  <Projects />
                </div>
              </div>
              <div className="pr-[190px] pl-[30px] pt-[30px] pb-[500px] z-[99]">
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
