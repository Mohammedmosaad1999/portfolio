
"use client";

import React from "react";

export default function DownloadResumeButton() {
  const download = () => {
    const aTag = document.createElement("a");
    aTag.href = "/mohamed.pdf";
    aTag.setAttribute("download", "mohamed.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <button
      className="w-11/12 max-w-[300px] text-center py-4 text-white rounded-2xl cursor-pointer text-lg font-semibold transition-all duration-200 ease-in-out bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg hover:scale-105 hover:shadow-xl"
      onClick={download}
    >
      Download Resume
    </button>
  );
}

