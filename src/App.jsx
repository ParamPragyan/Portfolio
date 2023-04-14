import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import github from "../src/assets/github.svg";
import twitter from "../src/assets/twitter1.svg";
import linkedin from "../src/assets/linkedin1.svg";

function App() {
  const [position1, setPosition1] = useState({
    pos1: true,
    pos2: false,
    pos3: false,
    pos4: false,
  });
  // const [position2, setPosition2] = useState(false);

  const changePosition1 = () => {
    if (window.scrollY >= 100 && window.scrollY < 450) {
      setPosition1((state) => {
        return {
          pos1: false,
          pos2: true,
          pos3: false,
          pos4: false,
        };
      });
    }

    if (window.scrollY >= 450 && window.scrollY < 730) {
      setPosition1((state) => {
        return {
          pos1: false,
          pos2: false,
          pos3: true,
          pos4: false,
        };
      });
    }

    if (window.scrollY >= 730) {
      setPosition1((state) => {
        return {
          pos1: false,
          pos2: false,
          pos3: false,
          pos4: true,
        };
      });
    }

    if (window.scrollY < 100 && position1.pos1 == false) {
      setPosition1((state) => {
        return {
          pos1: true,
          pos2: false,
          pos3: false,
          pos4: false,
        };
      });
    }
    // else {
    //   setPosition1((state) => {
    //     return {
    //       ...state,
    //       pos3: true,
    //     };
    //   });
    // }
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
    <section className="w-[100%] overflow-hidden relative">
      <NavBar />
      <Home />
      <div>
        {" "}
        <div className="right-strap h-[200vh]  bg-[#010006] w-[10rem] absolute right-[0rem] top-[80rem]" />
        <div className="left-strap h-[100vh] border-dashed  border-[#77ce20] ml-[5rem] border-l-[2px] absolute left-[0rem] top-[100vh]" />
        <div
          className={
            (position1.pos1 &&
              "icon he social-icons absolute  top-[45rem] right-[8rem] z-[100]") ||
            (position1.pos2 &&
              " icon he social-icons absolute top-[53rem] right-[18rem] z-[100]") ||
            (position1.pos3 &&
              " icon he social-icons absolute  top-[76rem] right-[20rem] z-[100]") ||
            (position1.pos4 &&
              " icon a1 social-icons fixed top-[25rem] right-[2.3rem] z-[100]")
          }
        >
          <a href="https://github.com/ParamPragyan" target="blank">
            <img
              src={github}
              height="60px"
              width="60px"
              className="icon  rounded-[50%]  "
              alt=""
            />
          </a>
        </div>
        <div
          className={
            (position1.pos1 &&
              " icon social-icons absolute top-[52rem] right-[17rem] z-[100]") ||
            (position1.pos2 &&
              " icon social-icons absolute  top-[68rem] right-[22rem] z-[100]") ||
            (position1.pos3 &&
              "icon social-icons absolute  top-[85rem] right-[14rem] z-[100]") ||
            (position1.pos4 &&
              " icon a1 social-icons fixed top-[35rem] right-[2.3rem] z-[100]")
          }
        >
          <a href="https://twitter.com/parampragyan" target="blank">
            <img
              src={twitter}
              height="60px"
              width="60px"
              className="icon  rounded-[50%]  "
              alt=""
            />
            </a>
        </div>
        <div
          className={
            (position1.pos1 &&
              " icon social-icons absolute  top-[63rem] right-[22rem] z-[100]") ||
            (position1.pos2 &&
              "icon social-icons absolute  top-[82rem] right-[17rem] z-[100]") ||
            (position1.pos3 &&
              " icon social-icons absolute top-[91rem] right-[4rem] z-[100]") ||
            (position1.pos4 &&
              " icon a1 social-icons fixed top-[45rem] right-[2.3rem] z-[100]")
          }
        >
          <a href="https://www.linkedin.com/in/parampragyan/" target="blank">
            <img
              src={linkedin}
              height="60px"
              width="60px"
              className="icon  rounded-[50%]  "
              alt=""
            />
            </a>
        </div>
        <div className="circle1 overflow-hidden h-[60rem] w-[60rem] absolute right-[-30rem] top-[40rem] rounded-[50%] bg-[#a1acaf]" />
        <div className="circle2 h-[40rem] w-[40rem] absolute right-[-20rem] top-[50rem] rounded-[50%] bg-[#010006]" />
        {/* <div className="circle3 h-[20rem] w-[20rem] absolute left-[-10rem] top-[65rem] rounded-[50%] bg-gradient-to-b from-[#c8f70d] to-[#20207e]"/> */}
      </div>
      <About />
    </section>
  );
}

export default App;
