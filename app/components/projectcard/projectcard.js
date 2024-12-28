import Link from "next/link";
import React from "react";

export default function ProjectCard({ project, setOpenModal }) {
  return (
    <div
      className="w-[330px] h-[490px] bg-[#171721] cursor-pointer rounded-lg shadow-lg overflow-hidden p-6 flex flex-col gap-3 transition-all duration-500 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-2xl hover:brightness-110"
      onClick={() => setOpenModal({ state: true, project })}
    >
      <img
        className="w-full h-[180px] bg-white rounded-lg shadow-md"
        src={project.image}
        alt={project.title}
      />
      <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <div
            key={index}
            className="text-xs font-normal text-[#854CE6] bg-[#854CE61A] px-2 py-1 rounded-lg"
          >
            {tag}
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-0 px-1">
        <p className="text-xl font-semibold text-[#b1b2b3]">{project.title}</p>
        <p className="font-normal text-[#b1b2b399] overflow-hidden mt-2 line-clamp-3">
          {project.description}
        </p>
        {project.website ? ( // Ensure project.website exists
          <Link href={project.website}>
            <span className="text-[#854CE6] underline">See The Project</span>
          </Link>
        ) : (
          <span className="text-[#b1b2b3]">No Website Available</span>
        )}
      </div>
    </div>
  );
}
