import React from "react";
import "./Infobar.css";
import NavSection from "./NavSection";

export default function Infobar() {
  return (
    <div className="left-grid">
      <div className="logo">
        <img
          className="h-[70px] w-[70px]"
          src="/portfolio-logo.png"
          alt="logo-image"
        />
      </div>
      <div>
        <h3 className="name-hdr">Antony Kimanzi</h3>
        <h5 className="skill-txt">Full-Stack Developer</h5>
        <span className="description-txt">
          I craft seamless digital experience from front-end design to back-end
          logic and everything in between.
        </span>
      </div>
      <div className="nv-section"><NavSection/></div>
    </div>
  );
}
