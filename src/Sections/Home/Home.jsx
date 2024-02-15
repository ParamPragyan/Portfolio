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
          {/* <div className="hero-btn">
            <button className=" btn-hero text-white border-[3px] border-[#c0c0c0] web bg-[#010006] rounded-r-[3rem] pl-[2rem] pr-[2rem] pb-[.5rem] mt-[3rem] check-btn text-[2rem] font-sans font-[400]">
              Check out my Work!
            </button>
          </div> */}

          <div class="btn-conteiner max-md:justify-center mt-8">
            <a class="btn-content" href="#">
              <span class="btn-title">Check Out My Works!</span>
              <span class="icon-arrow">
                <svg
                  width="66px"
                  height="43px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      id="arrow-icon-one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      id="arrow-icon-three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* <About /> */}
    </section>
  );
};

export default Home;
