import React from "react";
import { useState } from "react";
import "../Sections.css";
import About from "../About/About";
import github from "../../assets/github.svg"

const Home = () => {

  const [position1, setPosition1] = useState(false);
  const [position2, setPosition2] = useState(false);


  const changePosition1 = () => {
      if (window.scrollY >= 50) {
        setPosition1(true);
      }  else {
       setPosition1(false);
      }
     };

    //  const changePosition2 =() =>{
    //   if (window.scrollY >= 150) {
    //     setPosition2(true);
    //   } else {
    //    setPosition2(false);
    //   }
    //  }

     window.addEventListener("scroll", changePosition1);

  return (
    <section className=" hero h-[300vh] w-[100vw] pl-[15rem] pt-[18rem] bg-gradient-to-b from-[#000000] to-[#0b0a5f] overflow-hidden relative ">
      <div className="greetings font-[C-G-32] text-[2rem] text-[#5ce1e6] ">
        Greeting! fellas, This is...
      </div>
      <div className="name text-[15rem] leading-[1] font-[GAGALIN] text-[#a352ff] ">
        PARAM
      </div>
      <div className="whatido text-[6rem] font-[Poppins] text-[white] font-[500] ">
        I build things for the{" "}
        <span className="web font-[N-B-1] text-[7rem] text-[#5ce1e6]">Web</span>
      </div>
      <div className="bio text-[1.8rem] font-[Poppins] text-white font-[550]">
        I'm a front-end developer who is passionate about making stunning,
        user-friendly websites.
      </div>
      <button className=" btn-hero text-white border-[3px] border-[#5ce1e6] bg-[#010006] rounded-[3rem] px-[4rem] pb-[.5rem] mt-[3rem] check-btn text-[2.5rem] font-sans font-[400] ">
        Check out my Work!
      </button>
      <div className="w-full overflow-hidden" >
        <div className="circle1 overflow-hidden h-[60rem] w-[60rem] absolute right-[-30rem] top-[40rem] rounded-[50%] bg-white"></div>
        <div className="circle2 h-[40rem] w-[40rem] absolute right-[-20rem] top-[50rem] rounded-[50%] bg-[#010006]"></div>
      

      <div className="right-strap h-[192.5vh]  bg-[#010006] w-[10rem] absolute right-[0rem] top-[80rem]"></div>
      {/* <div className={ position1? "icon social-icons absolute top-[55rem] right-[19rem] ": position2? " icon social-icons absolute  top-[65rem] right-[30rem]": " icon social-icons absolute  top-[45rem] right-[8rem]"}>
        <img src={github} height="60px" width="60px" className="icon border-[white] border-[2px] rounded-[50%] " alt="" />
      </div> */}
      <div className={ position1? "icon social-icons absolute top-[55rem] right-[19rem] ": " icon social-icons absolute  top-[45rem] right-[8rem]"}>
        <img src={github} height="60px" width="60px" className="icon border-[white] border-[2px] rounded-[50%] " alt="" />
      </div>
      </div>
      <About />
    </section>
  );
};

export default Home;
