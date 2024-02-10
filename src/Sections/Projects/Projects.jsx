import React from "react";
import "../Sections.css";
import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <div className="min-h-[100vh] w-full px-40 bg-[#060606] ">
      <div className="heading font-[N-B-1] absolute bg-[#d8d8d8] px-[2rem] mt-[10rem] left-[2.8rem] rounded-l-lg text-[2rem]">
        Projects
      </div>
      <ProjectGrid />
    </div>
  );
};

export default Projects;
