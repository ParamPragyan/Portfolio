import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import github from "../src/assets/github.svg";
import twitter from "../src/assets/twitter.svg"
import linkedin from "../src/assets/linkedin.svg"

function App() {
  const [position1, setPosition1] = useState({
    pos1: true,
    pos2: false,
    pos3: false,
  });
  // const [position2, setPosition2] = useState(false);

  const changePosition1 = () => {
    if (window.scrollY >= 100 && window.scrollY < 450) {
      setPosition1((state) => {
        return {
          pos1: false,
          pos2: true,
          pos3: false,
        };
      });
    }

    if (window.scrollY >= 450 && position1.pos2 !== true) {
      setPosition1((state) => {
        return {
          pos1: false,
          pos2: false,
          pos3: true,
        };
      });
    }

    if (window.scrollY < 100 && position1.pos1 == false) {
      setPosition1((state)=> {
           return {
            pos1: true,
            pos2: false,
            pos3: false,
           }
      })
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
    <section className="w-[100%] overflow-hidden">
      <NavBar />
      <Home />
      <div>
        {" "}
        <div className="right-strap h-[100vh]  bg-[#010006] w-[10rem] absolute right-[0rem] top-[80rem]" />
        <div className="left-strap h-[100vh]  bg-[#77ce20] ml-[5rem] w-[2px] absolute left-[0rem] top-[100vh]" />
        <div
          className={
            (position1.pos1 &&
              "icon he social-icons absolute  top-[45rem] right-[8rem] z-[100]") ||
            (position1.pos2 &&
              " icon he social-icons absolute top-[53rem] right-[18rem] z-[100]")  ||
            (position1.pos3 &&
              " icon he social-icons absolute  top-[76rem] right-[20rem] z-[100]")
          }
        >
          <img
            src={github} 
            height="60px"
            width="60px"
            className="icon border-[white] bg-white border-[2px] rounded-[50%]  "
            alt=""
          />
        </div>


        <div
          className={
            (position1.pos1 &&
              " icon social-icons absolute top-[52rem] right-[17rem] z-[100]")  ||
            (position1.pos2 &&
              " icon social-icons absolute  top-[68rem] right-[22rem] z-[100]") ||
              (position1.pos3 &&
                "icon social-icons absolute  top-[85rem] right-[14rem] z-[100]")
          }
        >
          <img
            src={twitter} 
            height="60px"
            width="60px"
            className="icon border-[white] bg-white border-[2px] rounded-[50%]  "
            alt=""
          />
        </div>
        <div
          className={
            
            (position1.pos1 &&
              " icon social-icons absolute  top-[63rem] right-[22rem] z-[100]") ||
              (position1.pos2 &&
                "icon social-icons absolute  top-[82rem] right-[17rem] z-[100]") ||
                (position1.pos3 &&
                  " icon social-icons absolute top-[91rem] right-[4rem] z-[100]")
          }
        >
          <img
            src={linkedin} 
            height="60px"
            width="60px"
            className="icon border-[white] bg-white border-[2px] rounded-[50%]  "
            alt=""
          />



        </div>


        <div className="circle1 overflow-hidden h-[60rem] w-[60rem] absolute right-[-30rem] top-[40rem] rounded-[50%] bg-white" />
        <div className="circle2 h-[40rem] w-[40rem] absolute right-[-20rem] top-[50rem] rounded-[50%] bg-[#010006]" />
        {/* <div className="circle3 h-[20rem] w-[20rem] absolute left-[-10rem] top-[65rem] rounded-[50%] bg-gradient-to-b from-[#c8f70d] to-[#20207e]"/> */}
      </div>
      <About />
    </section>
  );
}

export default App;
