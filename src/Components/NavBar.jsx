import React from 'react'
import "./Components.css"


const NavBar = () => {
  return (
    <div className='nav-head bg-black text-white fixed w-full  '>
        <div className="nav-bar flex justify-center items-center flex-row text-[4.5rem] font-[N-B-1] ">
            <ul className='flex p-[2rem]'>
                <li className='px-[1rem]'>HOME</li>
                <li className='px-[1rem]'>ABOUT</li>
                <li className='px-[1rem]'>WORKS</li>
                <li className='px-[1rem]'>PROJECTS</li>
                <li className='px-[1rem]'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar