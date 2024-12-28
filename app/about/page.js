import React from "react";
import DownloadButton from "../components/downloadbutton/downloadbutton";

export default function About() {
  return (
    <div id="about" className="bg-[#191924] flex justify-center relative py-20 px-8 z-10 clip-path-polygon">
      <div className="absolute flex justify-end top-0 right-0 bottom-0 left-0 w-full h-full max-w-[1360px] overflow-hidden px-8 transform -translate-x-1/2 -translate-y-1/2">
        {/* Background content */}
      </div>
      <div className="relative flex justify-between items-center w-full max-w-[1100px] flex-col md:flex-row">
        {/* Image section moved to the left */}
        <div id="Right" className="w-full h-full flex order-1 justify-end gap-3 md:order-2 md:justify-center md:items-center mb-20 md:mb-0">
          <img
            className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-full border-2 border-[#854CE6]"
            src="/mohammed.jpg"
            alt="hero-image"
          />
        </div>

        {/* Text section moved to the right */}
        <div id="left" className="w-full order-2 mb-8 md:mb-0 md:order-1 flex flex-col items-center md:items-start">
          <p className="font-bold text-5xl text-[#F2F3F4] leading-[68px] text-center md:text-left">
            Hi, I am <br /> Mohamed Mosaad
          </p>
          <p className="font-semibold text-2xl flex gap-3 text-[#F2F3F4] leading-[68px] text-center md:text-left">
            I am a <span className="text-[#854CE6] cursor-pointer">Frontend developer</span>
          </p>
          <p className="text-lg leading-8 mb-10 text-[#6E6E6E] text-center md:text-left">
            I'm proficient in JavaScript and React.js, I'm passionate about creating great user experiences. Throughout my journey, I have worked on various projects.
          </p>
          {/* Use the client component for the button */}
          <DownloadButton fileName="mohamed.pdf" />
        </div>
      </div>
    </div>
  );
}
