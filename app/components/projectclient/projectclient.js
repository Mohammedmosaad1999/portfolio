"use client";

import React from "react";
import ProjectCard from "../projectcard/projectcard";
import { projects } from "../projectdata/projectdata";

export default function ProjectsClient({ openModal, setOpenModal }) {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-[#843bce0f] to-transparent flex flex-col justify-center relative z-1 items-center clip-path-polygon"
    >
      <div className="relative flex flex-col justify-between items-center w-full max-w-[1350px] p-2 pb-24 gap-3">
        <p className="text-4xl text-center font-semibold mt-5 text-headercolor">
          Projects
        </p>
        <p className="text-lg text-center max-w-[600px] text-h2color">
          I have worked on a wide range of projects. Here are some of my
          projects.
        </p>
        <div 
    
        className="flex justify-center items-center gap-7 flex-wrap">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setOpenModal={setOpenModal} // Pass setOpenModal to ProjectCard
            />
          ))}
        </div>
      </div>
    </div>
  );
}

