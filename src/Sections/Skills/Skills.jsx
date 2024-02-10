import React from "react";
import "../Sections.css";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills h-[100vh] px-[15rem] ">
      {/* <div className='iiframe'>
  <iframe loading="lazy" className='iframe'
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFgzRQ1pxE&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div> */}
      <div className="heading font-[N-B-1] absolute bg-[#d8d8d8] px-[2rem] mt-[10rem] left-[5.55rem] rounded-l-lg text-[2rem]">
        Skills
      </div>

      <div className="skill-icons p-[19rem]">
        <ul className="flex flex-wrap justify-center items-center gap-[10rem]">
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiJavascript className="h-[10rem]  w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              JavaScript
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiReact className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              React JS
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiTailwindcss className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              TailwindCSS
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiHtml5 className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              HTML
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiCss3 className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              CSS3
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiFirebase className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              Firebase
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiGit className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              Git
            </h1>
          </li>
          <li className="w-[fit-content] p-[1rem] rounded-[.5rem] bg-black drop-skill">
            <SiGithub className="h-[10rem] w-[10rem] text-white" />
            <h1 className="text-[white] pt-[1rem] text-[1.5rem] flex flex-wrap justify-center items-center ">
              GitHub
            </h1>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
