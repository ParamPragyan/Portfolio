import React from "react";
import "../Sections.css";
import ME from "../../assets/me.jpg";

const About = () => {
  return (
    <section className="my-[20rem]">
      <div className="container-about pr-[30rem] pt-[15rem] text-[4rem] flex justify-center items-center">
        <div className="left mr-[10rem]">
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
          <div className="img-container w-[320px] ">
            <img
              src={ME}
              width="1100px"
              height="600px"
              className="rounded-[50%/150px]"
              alt=""
            />
            <div className="img-up hand w-[165px] backdrop-blur-[40px]  rounded-[20px] absolute top-[98rem] pb-[.9rem] cursor-pointer  right-[52rem] bg-[#cde4f490] mx-[0] text-center text-[1.7rem]">
              {" "}
              Greetings...!<span className=" hover:rotate-45 text-[2.5rem] ">👋</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
