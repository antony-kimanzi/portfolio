import React from "react";
import "./Infobar.css";
import NavSection from "./NavSection";
import Socials from "./Socials";

export default function Infobar() {
  return (
    <div className="left-grid">
      <div className="logo">
        <img
          className="logo-image"
          src="/images/portfolio-logo.png"
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
      <img className="arrow-down" src="/images/arrow-down.gif" alt="scroll down gif"/>
      <div className="nv-section"><NavSection/></div>
      <div className="socials-section"><Socials /></div>
    </div>
  );
}
