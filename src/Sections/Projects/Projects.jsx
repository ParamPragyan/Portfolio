import React from "react";
import "../Sections.css";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div className="min-h-[100vh] w-full  px-40 max-md:px-10 bg-[#060606] ">
      <div className="dot h-[1rem] w-[1rem] absolute left-[0rem] ml-[14.6rem]   rounded-[50%] bg-[#d8d8d8]" />

      <div className="left-strap h-[15vh] border-dashed  border-[#d8d8d8] ml-[15rem] border-l-[2px] absolute left-[0rem] top-[300vh] " />

      <div className="heading font-[N-B-1] absolute bg-[#d8d8d8] px-[2rem] mt-[10rem] left-[2.8rem] rounded-l-lg text-[2rem]">
        Projects
      </div>
      <ProjectGrid />
    </div>
  );
};

export default Projects;
