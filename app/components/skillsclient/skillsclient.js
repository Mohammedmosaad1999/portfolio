"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function SkillsClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "Tailwind CSS",
          image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
        },
        {
          name: "JavaScript",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
        {
          name: "React Js",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Redux",
          image:
            "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
        },
        {
          name: "Next Js",
          image:
            " https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        }, 
      ],
    },
   
  ];

  return (
    <div className="flex flex-col justify-center items-center relative z-1">
      <div className="flex flex-col justify-between items-center w-full max-w-[1100px] gap-3">
        <h2 className="text-4xl text-center font-semibold mt-5 text-headercolor">Skills</h2>
        <p className="text-lg text-center max-w-[600px] text-h2color">Here are some of the skills I have acquired over the years.</p>
        <div className="w-full flex flex-wrap mt-7 gap-7 justify-center">
          {skills.map((skillCategory, index) => (
            <div key={index} ref={ref} className={`w-full max-w-[500px] bg-[#171721] border border-[#854CE6] shadow-lg rounded-2xl p-5 ${inView ? (index % 2 === 0 ? 'animate-lefttoright' : 'animate-righttoleft') : ''}`}>
              <h3 className="text-2xl font-semibold text-[#b1b2b3] mb-5 text-center">{skillCategory.title}</h3>
              <div className="flex justify-center flex-wrap gap-3 mb-5">
                {skillCategory.skills.map((skill, idx) => (
                  <div key={idx} className="text-base font-normal text-[#F2F3F4] border border-[#F2F3F4] rounded-xl p-3 flex items-center justify-center gap-2">
                    <img src={skill.image} alt={skill.name} className="w-6 h-6" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}