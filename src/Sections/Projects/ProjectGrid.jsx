import React from "react";
import github from "../../assets/github.svg";
import link from "../../assets/link.svg";
import data from "../../data.json";
import { div } from "@tensorflow/tfjs";

const ProjectGrid = () => {
  return (
    //
    <div className=" py-40 flex items-center justify-center flex-wrap ">
      {data.projects.map((project, idx) => (
        <div className="flex flex-col">
          <div
            key={idx}
            className="drop-project  flex p-[3rem] items-center justify-center hover:translate-y-[-2rem] transition-all duration-500"
          >
            <div className="group border-b-2 border-white h-[22rem] duration-500 max-md:h-[28rem] w-full rounded-[15px] relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30  ">
              <div className="h-[22rem] duration-500 max-md:h-[28rem]  w-fit">
                <img
                  className="h-full w-full object-top	 object-contain transition-transform duration-500 group-hover:scale-150 group-hover:translate-y-[20%]"
                  src={project.image}
                  alt=""
                />{" "}
              </div>
              <div className="absolute inset-0 max-md: bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/30 group-hover:via-black/70 group-hover:to-black/80"></div>
              <div className="absolute inset-0 max-md:inset-[3rem] flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className=" text-3xl p-3 max-md:p-4 max-md:text-5xl group-hover:rounded-2xl transition-all duration-500 rounded-t-2xl bg-white font-bold text-BLACK">
                  {project.tittle}
                </h1>
                <p className="mb-3 mt-2 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.desc}
                </p>
                <p></p>
                <div className="icon-project flex gap-9">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      className="w-[3rem] bg-white rounded-full"
                      src={github}
                      alt=""
                    />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      className="w-[3rem] p-1 bg-white rounded-full"
                      src={link}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden group-hover:block translate-y-[-3rem] flex-row item-center justify-center  text-2xl font-[N-B-1] text-[#fff]">
            <div className="w-fit p-3 flex bg-[#000000] flex-row item-center justify-center gap-3 text-2xl font-[N-B-1] text-[#fff]">
              <h2>Technology Used:</h2>
              {project.skills.map((skill) => (
                <div>
                  <p className="text-2xl font-[N-B-1]">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        //
      ))}
    </div>
  );
};

export default ProjectGrid;
