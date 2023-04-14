import React from "react";
import "../Sections.css";
import ME from "../../assets/me2.png";
import gmail from "../../assets/gmail.svg";

const About = () => {
  return (
    <section className="about pl-[15rem] h-[200vh] my-[0rem]">
      <div className="dot h-[1rem] w-[1rem] absolute left-[0rem] ml-[4.6rem]   rounded-[50%] bg-[#7af70d]" />

      <div className="heading font-[N-B-1] absolute bg-[#98dd20] px-[2rem] mt-[5rem] left-[5rem] rounded-r-lg text-[3.5rem]">
        About
      </div>

      <div className="container-about pr-[35rem] pt-[15rem] text-[4rem] flex justify-center items-center">
        <div className="left mr-[13rem]">
          <p className="left-about text-white border-[white] border-[1px] p-[5rem] font-[Poppins] rounded-[20px]">
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
          <div
            id="one"
            className="img-container w-[265px] h-[385px]  bg-[#102960] flex justify-center items-center rounded-[50%/120px] "
          >
            <img
              src={ME}
              className=" img-me group rounded-[50%/110px] w-[235px] h-[350px] "
              alt=""
            />
            <div className="flex items-center img-up hand w-[155px] h-[4.9rem] backdrop-blur-[40px] rounded-[25px] absolute top-[98rem] py-[.3rem] pl-[1rem] pr-[.1rem] cursor-pointer  right-[27rem] bg-[#fcfeff63] shadow-xl mx-[0rem] text-center text-[1.8rem]">
              Greetings...!{" "}
              <div className="ml-[.5rem] h-[4rem] flex justify-center items-center bg-gradient-to-b from-[#000000] to-[#110e94] w-[4rem] rounded-[25px]  ">
                <div
                  id="two"
                  className="hand duration-500 w-[2.3rem] pb-[0.4rem] mr-[0.9rem] text-[2rem]"
                >
                  👋
                </div>
              </div>
            </div>
            <div className="flex items-center img-up lc h-[4.9rem] w-[170px] pl-[.8rem] pt-[.1rem] pr-[1rem] backdrop-blur-[40px] rounded-[25px]  absolute top-[115rem] py-[0rem] px-[0rem] cursor-pointer  right-[53rem] bg-[#fcfeff63] mx-[0rem] text-center text-[1.8rem]">
            <div className="bg-gradient-to-b p-[.75rem] flex items-center from-[#852b07] to-[#f0c61b] mr-[0.5rem] rounded-[20px] "><img src={gmail} className=" w-[2.3rem]" alt="" /></div> Let's Connect 
            </div>
            <div
              id="lc"
              className="flex items-center img-up w-[280px] h-[4.9rem] backdrop-blur-[40px] rounded-[25px] absolute top-[115rem] py-[0rem] pl-[.8rem] cursor-pointer  right-[53rem] bg-[#fcfeff63] text-[#000000] mx-[0rem] text-center text-[1.8rem]"
            >
             <div className="bg-gradient-to-b p-[.75rem] flex items-center from-[#852b07] to-[#f0c61b] mr-[.5rem] rounded-[25px] "><img src={gmail} className=" w-[2.3rem]" alt="" /></div>parampragyan@gmail.com
              {/* <img src={gmail} className=" w-[2rem]" alt="" /> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
