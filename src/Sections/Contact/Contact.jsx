import React from "react";
import "../Sections.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[fit] w-full  px-40 max-md:px-10 bg-[#060606] "
    >
      <div className="tittle-about flex items-center justify-center">
        <h1 className="text-8xl max-md:text-7xl  font-[N-B-1] font-bold text-[#a2a2a23d]">
          Connect With Me.
        </h1>
      </div>

      <div className=" h-[30vh] p-40 max-lg:p-20 max-md:p-5 flex flex-col items-center justify-center">
        <p className="text-3xl  text-center p-10 text-[#ffffff91] font-[Poppins] leading-normal ">
          If you’re looking for your next Front-end developer, need a
          Collaborator or just want to have a conversation, I’d love to meet
          you!
        </p>
        <a
          className="text-[2rem] font-[] font-bold rounded-full hover:translate-y-[5px] duration-500 bg-[white] py-3 px-8 max-md:text-[3rem]"
          href="mailto:parampragyan@gmail.com"
        >
          Say Hi!
        </a>
      </div>

      {/* <div className="flex items-center justify-center pt-[10rem] flex-wrap space-x-[5rem]">
        <div className="left">
          <div>
            <div className="px-20 w-fit">
              <h1 className="text-[#d8d8d8] tracking-wide text-[5rem] text-left  font-[900] flex flex-col ">
                <span>Be among the first</span>
                <span>to experience</span>
                <span>the future.</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="right">
          <form
            action=""
            id="contact-form"
            className="flex items-center justify-center flex-col gap-11 px-11 border-[#ededed] w-fit py-11  bg-[#1d1d1d79] rounded-3xl "
          >
            <input
              placeholder="Name"
              type="text"
              required="true"
              name=""
              className="w-[30rem] bg-black border-2 border-[#d8d8d8] rounded-2xl text-2xl text-[#fff] px-8 py-5"
            />

            <input
              placeholder="Email"
              type="email"
              required="true"
              name=""
              className=" w-[30rem] bg-black border-2 border-[#d8d8d8] rounded-2xl text-2xl text-[#fff] px-8 py-5"
            />

            <textarea
              placeholder="Type your message here"
              required="true"
              name=""
              className=" a w-[30rem] h-[20vh] bg-black border-2 border-[#d8d8d8] rounded-2xl text-2xl text-[#fff] px-8 py-5"
            ></textarea>

            <input
              type="submit"
              value="Send"
              name=""
              className=" a w-[30rem] border-2 border-[#d8d8d8] bg-[#dedede] rounded-3xl text-4xl text-[#000] px-8 py-5"
            />
          </form>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;
