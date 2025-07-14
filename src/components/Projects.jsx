import React from 'react'
import "./Projects.css"

export default function Projects() {

  return (
    <div className='container'>
      <a href='https://bluepacknova.com/' target='_blank'><div className='project-section'>
        <div className='bg-image-style'></div>
        <div className='text-section'><div className='project-hdr'><h5>Bluepack Nova</h5><img src="/images/link-arrow.svg" alt="resume-arrow-image" className="h-[24px] w-[24px] mt-[10px] ml-[10px]" /></div><p>An ecommerce web app that offers a streamline online platform for businesses and individuals to easily order high-quality IoT and robotics products.</p></div>
      </div></a>
    </div>
  )
}
