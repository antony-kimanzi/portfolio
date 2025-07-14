import React from "react";

export default function Footer() {
  const isMobile = window.innerWidth < 1181;
  return (
    <>
      {isMobile ? (
        <div className="w-full">
          <p className="text-[#9EA7B0] text-[12px] font-semibold tracking-wider">
            Coded in{" "}
            <span className="text-[#D4D7DA] font-[18px]">
              Visual Studio Code
            </span>{" "}
            by yours truly. Built with{" "}
            <span className="text-[#D4D7DA] font-[18px]">
              React.Js, TailwindCSS and SCSS
            </span>
            . All text is set in the{" "}
            <span className="text-[#D4D7DA] font-[18px]">Montserrat</span>{" "}
            typeface.
          </p>
        </div>
      ) : (
        <div className="w-[400px]">
          <p className="text-[#9EA7B0] text-[14px] font-semibold tracking-wider">
            Coded in{" "}
            <span className="text-[#D4D7DA] font-[20px]">
              Visual Studio Code
            </span>{" "}
            by yours truly. Built with{" "}
            <span className="text-[#D4D7DA] font-[20px]">
              React.Js, TailwindCSS and SCSS
            </span>
            . All text is set in the{" "}
            <span className="text-[#D4D7DA] font-[20px]">Montserrat</span>{" "}
            typeface.
          </p>
        </div>
      )}
    </>
  );
}
