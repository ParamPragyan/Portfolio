import React from "react";
import "../Sections.css";
import ME from "../../assets/me2.png";

const About = () => {
  return (
    <section className="about pl-[15rem] h-[100vh] my-[0rem]" >
              <div className="dot h-[1rem] w-[1rem] absolute left-[0rem] ml-[4.6rem]   rounded-[50%] bg-[#7af70d]"/>

      <div className="heading font-[N-B-1] absolute bg-[#98dd20] px-[2rem] mt-[5rem] left-[5rem] rounded-r-lg text-[3.5rem]">About</div>

      <div className="container-about pr-[35rem] pt-[15rem] text-[4rem] flex justify-center items-center">
        <div className="left mr-[13rem]">
          <p className="text-white border-[white] border-[1px] p-[5rem] font-[Poppins] rounded-[20px] bg-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            modi alias voluptates, aliquam neque eius vitae tempore dicta
            consectetur fugit facilis porro quibusdam aspernatur qui! Non soluta
            recusandae illum doloribus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat nobis non, cum reiciendis eius delectus
            laboriosam sunt similique maxime omnis, dolorem doloribus aut
            fugiat. Natus esse tempore debitis officia corporis.{" "}
          </p>
        </div>
        <div className="right">
          <div id="one" className="img-container w-[265px] h-[385px]  bg-[#102960] flex justify-center items-center rounded-[50%/120px] ">
            <img
              src={ME}
              className=" img-me group rounded-[50%/110px] w-[235px] h-[350px] "
              alt=""
            />
            <div className="flex items-center justify-center img-up hand w-[155px] backdrop-blur-[40px] rounded-[20px] absolute top-[98rem] py-[.3rem] px-[1rem] cursor-pointer  right-[27rem] bg-[#fcfeff63] mx-[.6rem] text-center text-[1.8rem]">
              
              Greetings...!<div id="two" className="hand duration-500 w-[2.3rem] pb-[0.4rem] text-[2rem]" >👋</div>
            </div>
            <div className="flex items-center justify-center img-up lc w-[165px] backdrop-blur-[40px] rounded-[20px] border-b-[3px] border-[black] absolute top-[115rem] py-[.6rem] px-[1rem] cursor-pointer  right-[53rem] bg-[#fcfeff63] mx-[.6rem] text-center text-[1.8rem]">
              
              Let's Connect
            </div>
            <div id="lc" className="flex items-center justify-center img-up lc w-[255px] backdrop-blur-[40px] rounded-[20px] border-b-[3px] border-[black] absolute top-[115rem] py-[.6rem] px-[1rem] cursor-pointer  right-[53rem] bg-[#fcfeff63] text-[#000000] mx-[.6rem] text-center text-[1.8rem]">
              
              parampragyan@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


