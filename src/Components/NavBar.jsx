import React, { useState } from "react";
import "./Components.css";
import Resume from ".././assets/paramResume.pdf";

const NavBar = () => {
  const [bg, setBg] = useState(false);
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const changecolor = () => {
    if (window.scrollY > 50) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  window.addEventListener("scroll", changecolor);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="flex justify-center">
      <div
        className={
          bg
            ? "nav-head nav-head-changed mt-[0rem] bg-[#00000085] ease-in-out duration-[.8s]  backdrop-blur-[10px] border-b-[.5px] border-l-[.5px] border-r-[.5px] border-t-[.5px] border-[#ffffff49] border-t-[#000] text-[#ffffffad] rounded-b-[2.5rem] fixed w-[74%] z-[1000] "
            : "nav-head mt-[4rem]  bg-[#1d2429]  backdrop-blur-[10px] border-[.5px] rounded-[2.5rem] border-[#2A2B37] text-[#ffffffad] ease-in-out duration-1000 fixed w-[74%]  z-[1000]  "
        }
      >
        <div className="nav-bar w-[100%] px-[2rem] flex py-[.8rem]  items-center justify-between flex-row text-[4.5rem] font-[N-B-1] ">
          <div className="logo">
            <h1 className="text-[white] font-[logo-font]">P-CUBE</h1>
          </div>
          <ul
            className={
              click
                ? " nav-items-sm p-5 fixed bg-[#040404] top-[1.5vh] flex-col block"
                : " nav-items flex p-[1rem] max-lg:hidden  cursor-pointer "
            }
          >
            <li
              className={
                click
                  ? " flex justify-center py-5 text-5xl"
                  : "px-[1rem] hover:text-[white] cursor-pointer"
              }
            >
              <a
                onClick={click? handleClick: undefined}
                className={click ? "text-5xl" : "text-2xl"}
                href="#home"
              >
                {" "}
                Home{" "}
              </a>{" "}
            </li>
            <li
              className={
                click
                  ? " flex justify-center py-5 text-5xl"
                  : "px-[1rem] hover:text-[white] cursor-pointer"
              }
            >
              <a
                onClick={click? handleClick: undefined}
                className={click ? "text-5xl" : "text-2xl"}
                href="#about"
              >
                {" "}
                About{" "}
              </a>{" "}
            </li>
            <li
              className={
                click
                  ? " flex justify-center py-5 text-5xl "
                  : "px-[1rem] hover:text-[white] cursor-pointer"
              }
            >
              <a
                onClick={click? handleClick: undefined}
                className={click ? "text-5xl" : "text-2xl"}
                href="#skills"
              >
                {" "}
                Skills
              </a>{" "}
            </li>
            <li
              className={
                click
                  ? " flex justify-center py-5 text-5xl "
                  : "px-[1rem] hover:text-[white] cursor-pointer"
              }
            >
              <a
                onClick={click? handleClick: undefined}
                className={click ? "text-5xl" : "text-2xl"}
                href="#proj"
              >
                {" "}
                Projects
              </a>
            </li>
            <li
              className={
                click
                  ? " flex justify-center py-5 text-5xl"
                  : "px-[1rem] hover:text-[white] cursor-pointer"
              }
            >
              <a
                onClick={click? handleClick: undefined}
                className={click ? "text-5xl" : "text-2xl hover:text-white"}
                href="#proj"
              >
                {" "}
                Contact
              </a>
            </li>
            <div
              className={
                click
                  ? " flex justify-center py-5 text-5xl bg-white text-black"
                  : "px-[1rem] hidden text-black hover:text-[black] cursor-pointer"
              }
            >
              <a
                onClick={handleClick}
                href={Resume}
                className="text-5xl "
                download="param_pragyan_resume.pdf"
              >
                Resume
              </a>
            </div>
          </ul>

          <div
            onClick={handleClick}
            className={
              click
                ? "hamburger active z-[50]"
                : "max-lg:block  hamburger  hidden z-[50] "
            }
          >
            {/* {click ? (
              <div>
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>  
             </div>
            ) : (
              <div>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>  
              </div>
            )} */}

            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
