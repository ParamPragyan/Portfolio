import React, { useState } from 'react'
import "./Components.css"
import logo from "../assets/logo.png"


const NavBar = () => {

  const [bg, setBg] = useState(false);

  const changecolor = () => {
    if(window.scrollY > 100) {
      setBg(true);
    } else {
      setBg(false)
    }
  }
 

  window.addEventListener("scroll", changecolor);


  return (
    <div className={bg ? 'nav-head bg-[#00000085] ease-in-out  backdrop-blur-[10px] border-b-[.5px] border-[#ffffff49] text-[#ffffffad] fixed w-[100%] z-[1000] ' : 'nav-head bg-[#010206] text-[#ffffffad] ease-in-out  fixed w-[100%] z-[1000] '}>
        <div className="nav-bar w-[100%] frame flex py-[.8rem]  items-center justify-between flex-row text-[4.5rem] font-[N-B-1] ">
          <div className="logo"><h1 className='text-[white] font-[logo-font]'>P-CUBE</h1></div>
            <ul className='flex p-[1rem]  cursor-pointer '>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Home</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>About</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Skills</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Projects</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Contacts</li>
                <div className='pl-[5rem]' >?</div>
            </ul>
        </div>
    </div>
  )
}

export default NavBar