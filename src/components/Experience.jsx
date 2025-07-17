import React from "react";
import "./Experience.css";

export default function Experience() {
  const isMobile = window.innerWidth < 1181;

  return (
    <>
      {isMobile ? (
        <div className="container">
          <div className="experience-section-mobile">
            <div className="txt-section-mobile">
              <div className="yr-section-mobile">
                <span>JUNE 2025</span>
              </div>
              <h5>Zetu Creations Ltd</h5>
              <p>
                Build and style a high-converting website, this includes the
                frontend components and the backend infrastructure. Work closely
                with the graphics design team to enhance the online visibility
                of the website and optimize its SEO.
              </p>
              <div className="lng-section-mobile">
                <span>Javascript</span>
                <span>React</span>
                <span>Python</span>
                <span>Django</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div className="vertical-line-mobile"></div>
          <div className="experience-section-mobile">
            <div className="txt-section-mobile">
              <div className="yr-section-mobile">
                <span>JAN</span>
                <div className="horizontal-line-mobile"></div>
                <span>APR 2025</span>
              </div>
              <h5>Bluepack</h5>
              <div className="posts-mobile">
                <span>Lead Frontend Software Developer</span>
                <span>Co Backend Software Developer</span>
              </div>
              <p>
                Build and style a high-converting website, this includes the
                frontend components and the backend infrastructure. Work closely
                with the graphics design team to enhance the online visibility
                of the website and optimize its SEO.
              </p>
              <div className="lng-section-mobile">
                <span>Javascript</span>
                <span>React</span>
                <span>Python</span>
                <span>Django</span>
                <span>SQL</span>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
          <div className="vertical-line-mobile"></div>
          <div className="experience-section-mobile">
            <div className="txt-section-mobile">
              <div className="yr-section-mobile">
                <span>SEP</span>
                <div className="horizontal-line-mobile"></div>
                <span>DEC 2023</span>
              </div>
              <h5>Parliament</h5>
              <div className="posts-mobile">
                <span>Assistant ICT Officer</span>
              </div>
              <p>
                Provided overall ICT administrative support by performing system
                backups, website development and updates, network support and
                maintenance, network administration and security, and hardware
                and software troubleshooting.
              </p>
              <div className="lng-section-mobile">
                <span>Virtual Machine</span>
                <span>Bash</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div>
            <a
              href="/pdfs/Resume.pdf"
              target="_blank"
              rel="noopener no referrer"
              className="pdf-link"
            >
              View Résumé
              <img src="images/link-arrow.svg" alt="resume-arrow-image" className="h-[24px] w-[24px] mt-[10px] ml-[10px]" />
            </a>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="experience-section">
            <div className="yr-section">
              <span>JUNE 2025</span>
              <div className="vertical-line"></div>
            </div>
            <div className="txt-section">
              <h5>Zetu Creations Ltd</h5>
              <p>
                Build and style a high-converting website, this includes the
                frontend components and the backend infrastructure. Work closely
                with the graphics design team to enhance the online visibility
                of the website and optimize its SEO.
              </p>
              <div className="lng-section">
                <span>Javascript</span>
                <span>React</span>
                <span>Python</span>
                <span>Django</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div className="experience-section">
            <div className="yr-section">
              <div className="yr-text">
                <span>JAN</span>
                <div className="horizontal-line"></div>
                <span className="yr-2">APR 2025</span>
              </div>
              <div className="vertical-line-2"></div>
            </div>
            <div className="txt-section">
              <h5>Bluepack</h5>
              <div className="posts">
                <span>Lead Frontend Software Developer</span>
                <span>Co Backend Software Developer</span>
              </div>
              <p>
                Build and style a high-converting website, this includes the
                frontend components and the backend infrastructure. Work closely
                with the graphics design team to enhance the online visibility
                of the website and optimize its SEO.
              </p>
              <div className="lng-section">
                <span>Javascript</span>
                <span>React</span>
                <span>Python</span>
                <span>Django</span>
                <span>SQL</span>
                <span>TailwindCSS</span>
              </div>
            </div>
          </div>
          <div className="experience-section">
            <div className="yr-section">
              <div className="yr-text">
                <span>SEP</span>
                <div className="horizontal-line-2"></div>
                <span className="yr-2">DEC 2023</span>
              </div>
              <div className="vertical-line-3"></div>
            </div>
            <div className="txt-section">
              <h5>Parliament</h5>
              <div className="posts">
                <span>Assistant ICT Officer</span>
              </div>
              <p>
                Provided overall ICT administrative support by performing system
                backups, website development and updates, network support and
                maintenance, network administration and security, and hardware
                and software troubleshooting.
              </p>
              <div className="lng-section">
                <span>Virtual Machine</span>
                <span>Bash</span>
                <span>SQL</span>
              </div>
            </div>
          </div>
          <div className="my-[20px]">
            <a
              href="/pdfs/Resume.pdf"
              target="_blank"
              rel="noopener no referrer"
              className="pdf-link"
            >
              <span className="text-[18px]">View Résumé</span>
              <img src="images/link-arrow.svg" alt="resume-arrow-image" className="h-[24px] w-[24px] mt-[10px] ml-[10px]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
