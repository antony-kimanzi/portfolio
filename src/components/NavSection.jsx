import React, { useContext } from 'react';
import "./NavSection.css";
import SectionContext from '../context/SectionContext';

export default function NavSection() {
  const { activeSection } = useContext(SectionContext);
  
  return (
    <div className='nav-section'>
      <div className='links'>
        <div className={`horizontal-line ${activeSection === 'about' ? 'active' : ''}`}></div>
        <a href='#about' className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
          ABOUT ME
        </a>
      </div>
      <div className='links'>
        <div className={`horizontal-line ${activeSection === 'experience' ? 'active' : ''}`}></div>
        <a href='#experience' className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
          EXPERIENCE
        </a>
      </div>
    </div>
  );
}