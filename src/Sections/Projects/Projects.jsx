import React from "react";
import "../Sections.css";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div
      id="proj"
      className=" relative min-h-[100vh] w-full  px-40 max-md:px-0 bg-[#060606] "
    >
      <div className="dot h-[1rem] w-[1rem] absolute left-[0rem] ml-[14.6rem]   rounded-[50%] bg-[#d8d8d8]" />

      <div className="left-strap h-[15vh] border-dashed  border-[#d8d8d8] ml-[15rem] border-l-[2px] absolute left-[0rem] top-[0vh] " />

      <div className="heading font-[N-B-1] absolute bg-[#d8d8d8] px-[2rem] mt-[10rem] left-[2.8rem] rounded-l-lg text-[2rem]">
        Projects
      </div>

      <div className="tittle-about flex items-center justify-center">
        <h1 className="text-8xl max-md:text-7xl  font-[N-B-1] font-bold text-[#a2a2a23d]">
          What I've Built.
        </h1>
      </div>

      <ProjectGrid />
    </div>
  );
};

export default Projects;
