import React from "react";
import "./Socials.css";

export default function Socials() {
  const isMobile = window.innerWidth < 1181;
  return (
    <>
      {isMobile ? (
        <div className="text-[#e2e8f0] w-full">
          <h5 className="text-[18px] mb-[12px]">Get In Touch</h5>
          <span className="text-[14px]">
            Whether you have an idea for a project or just want to chat, Feel
            free to say hello.
          </span>
          <div className="flex gap-[12px] mt-[20px]">
            <a className="hover:cursor-pointer" href="https://github.com/antony-kimanzi" target="_blank">
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px] color-change-image"
                src="/images/Github-icon.svg"
                alt="github-icon"
              />
            </a>
            <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/antony-kimanzi-b1385a373/" target="_blank">
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px]"
                src="/images/LinkedIn-icon.svg"
                alt="linkedin-icon"
              />
            </a>
            <a className="hover:cursor-pointer" href="mailto:antony.kim345@gmail.com" target="_blank" >
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px] color-change-image"
                src="/images/icons8-gmail-logo-24.svg"
                alt="gmail-icon"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="text-[#e2e8f0] w-[375px]">
          <h5 className="text-[20px] mb-[12px]">Get In Touch</h5>
          <span>
            Whether you have an idea for a project or just want to chat, Feel
            free to say hello.
          </span>
          <div className="flex gap-[12px] mt-[20px]">
            <a className="hover:cursor-pointer" href="https://github.com/antony-kimanzi" target="_blank">
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px] color-change-image"
                src="/images/Github-icon.svg"
                alt="github-icon"
              />
            </a>
            <a className="hover:cursor-pointer" href="https://www.linkedin.com/in/antony-kimanzi-b1385a373/" target="_blank">
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px]"
                src="/images/LinkedIn-icon.svg"
                alt="linkedin-icon"
              />
            </a>
            <a className="hover:cursor-pointer" href="mailto:antony.kim345@gmail.com" target="_blank">
              <img
                className="h-[27px] w-[27px] max-sm:h-[20px] max-sm:w-[20px]"
                src="/images/icons8-gmail-logo-24.svg"
                alt="linkedin-icon"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
