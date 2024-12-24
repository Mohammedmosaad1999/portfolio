
"use client";

import React from 'react';

export default function About() {
  
  const download =(pdf)=>{
    const aTag = document.createElement("a")
    aTag.href="/mohamed.pdf"
    aTag.setAttribute("download" , pdf)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  }

  return (
    <div id="about" className="bg-[#191924] flex justify-center relative py-20 px-8 z-10 clip-path-polygon">
      <div className="absolute flex justify-end top-0 right-0 bottom-0 left-0 w-full h-full max-w-[1360px] overflow-hidden px-8 transform -translate-x-1/2 -translate-y-1/2">
        {/* Background content */}

      </div>
      <div className="relative flex justify-between items-center w-full max-w-[1100px] flex-col md:flex-row">
        <div id="left" className="w-full order-1 mb-8 md:mb-0 md:order-2 flex flex-col items-center md:items-start">
          <p className="font-bold text-5xl text-[#F2F3F4] leading-[68px] text-center md:text-left">
            Hi, I am <br /> Mohamed Mosaad
          </p>
          <p className="font-semibold text-2xl flex gap-3 text-[#F2F3F4] leading-[68px] text-center md:text-left">
            I am a <span className="text-[#854CE6] cursor-pointer">Frontend developer</span>
          </p>
          <p className="text-lg leading-8 mb-10 text-[#6E6E6E] text-center md:text-left">
            I'm proficient in JavaScript and React.js, I'm passionate about creating great user experiences. Throughout my journey, I have worked on various projects.
          </p>
          <button
            className="w-11/12 max-w-[300px] text-center py-4 text-white rounded-2xl cursor-pointer text-lg font-semibold transition-all duration-200 ease-in-out bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg hover:scale-105 hover:shadow-xl"
            onClick={() => {
              download('pdf');
            }}
          >
            Download Resume
          </button>
        </div>
        <div id="Right" className="w-full h-full flex order-2 justify-end gap-3 md:order-1 md:justify-center md:items-center mb-20 md:mb-0">
          <img
            className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-full border-2 border-[#854CE6]"
            src="/mohamed.jpg"
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
}