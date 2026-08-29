import React from "react";
import "./Projects.css";

export default function Projects() {
  const isMobile = window.innerWidth < 1181;
  return (
    <>
      {isMobile ? (
        <div className="container-mobile">
          <a href="https://bluepacknova.com/" target="_blank">
            <div className="project-section-mobile">
              <div className="text-section-mobile">
                <div className="project-hdr-mobile">
                  <h5>Bluepack Nova</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  An ecommerce web app that offers a streamline online platform
                  for businesses and individuals to easily order high-quality
                  IoT and robotics products.
                </p>
              </div>
              <div className="bg-image-style-1-mobile"></div>
            </div>
          </a>
          <a href="https://qoa-frontend.vercel.app/" target="_blank">
            <div className="project-section-mobile">
              <div className="text-section-mobile">
                <div className="project-hdr-mobile">
                  <h5>Queen of Aroma</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  An ecommerce web application where users can browse and buy
                  quality perfumes and colognes.
                </p>
              </div>
              <div className="bg-image-style-3-mobile"></div>
            </div>
          </a>
          <a href="https://scentgalore.vercel.app/" target="_blank">
            <div className="project-section-mobile">
              <div className="text-section-mobile">
                <div className="project-hdr-mobile">
                  <h5>ScentGalore</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  A streamlined ecommerce platform for individuals and
                  businesses to easily discover and order high-quality perfumes.
                </p>
              </div>
              <div className="bg-image-style-2-mobile"></div>
            </div>
          </a>
        </div>
      ) : (
        <div className="container">
          <a href="https://bluepacknova.com/" target="_blank">
            <div className="project-section">
              <div className="bg-image-style-1"></div>
              <div className="text-section">
                <div className="project-hdr">
                  <h5>Bluepack Nova</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  An ecommerce web app that offers a streamline online platform
                  for businesses and individuals to easily order high-quality
                  IoT and robotics products.
                </p>
              </div>
            </div>
          </a>
          <a href="https://qoa-frontend.vercel.app/" target="_blank">
            <div className="project-section">
              <div className="bg-image-style-3"></div>
              <div className="text-section">
                <div className="project-hdr">
                  <h5>Queen of Aroma</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  An ecommerce web application where users can browse and buy
                  quality perfumes and colognes.
                </p>
              </div>
            </div>
          </a>
          <a href="https://scentgalore.vercel.app/" target="_blank">
            <div className="project-section">
              <div className="bg-image-style-2"></div>
              <div className="text-section">
                <div className="project-hdr">
                  <h5>ScentGalore</h5>
                  <img
                    src="images/link-arrow.svg"
                    alt="resume-arrow-image"
                    className="h-[24px] w-[24px] mt-[10px] ml-[10px]"
                  />
                </div>
                <p>
                  A streamlined ecommerce platform for individuals and
                  businesses to easily discover and order high-quality perfumes.
                </p>
              </div>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
