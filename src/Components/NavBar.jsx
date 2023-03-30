import React from 'react'
import "./Components.css"


const NavBar = () => {
  return (
    <div className='nav-head bg-black text-white fixed w-full z-[1000] '>
        <div className="nav-bar w-full flex justify-center items-center flex-row text-[4.5rem] font-[N-B-1] ">
            <ul className='flex p-[2rem]'>
                <li className='px-[1rem]'>Home</li>
                <li className='px-[1rem]'>About</li>
                <li className='px-[1rem]'>Works</li>
                <li className='px-[1rem]'>Projects</li>
                <li className='px-[1rem]'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar