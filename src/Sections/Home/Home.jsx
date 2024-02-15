import React from "react";
import { useState } from "react";
import "../Sections.css";
import homeimg from "../../assets/home-mobile2.png";
import About from "../About/About";
import github from "../../assets/github.svg";

const Home = () => {
  return (
    <section
      id="home"
      className=" hero frame2   h-[100vh] w-[100vw]  pt-[18rem] max-md:pt-0 max-md:flex max-md:justify-center  bg-[#060606] overflow-hidden relative "
    >
      <div className="flex items-center hero2">
        <div className=" home-down-line flex flex-col justify-center items-center mr-[3rem] mt-[.8rem]">
          <div className="w-5 h-5 rounded-full bg-[#d8d8d8]"></div>
          <div className="w-[.5rem] h-[35rem] sky-gradient"></div>
        </div>

        <div>
          <div className="greetings max-md:flex max-md:justify-center max-md:text-5xl font-[C-G-32] text-[2rem] text-[#d8d8d8] ">
            Greeting! fellas, This is...
          </div>
          <div className="name text-[15rem] leading-[1] max-md:leading-[15rem] font-[GAGALIN]  ">
            <h1
              id="name"
              className="name max-md:flex max-md:justify-center bg-clip-text w-[43rem]"
            >
              PARAM
            </h1>
          </div>
          <div className="whatido max-md:flex flex flex-row max-md:justify-center max-md:items-center text-[6rem] max-md:text-[6rem] font-[Poppins] text-[#d8d8d8] font-[500] ">
            <div className="flex justify-center items-center pt-3 leading-0">
              I build things for the{" "}
            </div>
            <span className="web pl-3 font-[N-B-1] text-[6rem] text-[#ffffff]">
              Web
            </span>
          </div>
          <div className="bio max-md:hidden text-[1.8rem] font-[Poppins] text-[#d8d8d8] font-[550]">
            I'm a{" "}
            <span className="bio text-[2rem] web font-[N-B-1] text-[#ffffff] font-[550]">
              {" "}
              Front-end developer
            </span>
            , who is passionate about making stunning, user-friendly websites.
          </div>

          {/* <div className="hero-img">
            <img className="heroimg" src={homeimg} alt="" />
          </div> */}
          <div className="hero-btn">
            <button className=" btn-hero text-white border-[3px] border-[#d8d8d8] web bg-[#010006] rounded-r-[3rem] pl-[2rem] pr-[2rem] pb-[.5rem] mt-[3rem] check-btn text-[2rem] font-sans font-[400]">
              Check out my Work!
            </button>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </section>
  );
};

export default Home;
