import React from 'react'
import "./Components.css"
import logo from "../assets/logo.png"


const NavBar = () => {
  return (
    <div className='nav-head bg-black text-white fixed w-[100%] z-[1000] '>
        <div className="nav-bar w-[100%] pl-[14.6rem] pr-[14.6rem] flex py-[.5rem]  items-center justify-between flex-row text-[4.5rem] font-[N-B-1] ">
          <div className="logo"><img  className='logo-img h-[60px]' src={logo} alt="" /></div>
            <ul className='flex p-[2rem]'>
                <li className='px-[1rem]'>HOME</li>
                <li className='px-[1rem]'>ABOUT</li>
                <li className='px-[1rem]'>WORKS</li>
                <li className='px-[1rem]'>PROJECTS</li>
                <li className='px-[1rem]'>CONTACT</li>
            </ul>
            <div className="toggle">++++</div>
        </div>
    </div>
  )
}

export default NavBar