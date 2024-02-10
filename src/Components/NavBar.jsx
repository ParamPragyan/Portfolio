import React, { useState } from 'react'
import "./Components.css"



const NavBar = () => {

  const [bg, setBg] = useState(false);

  const changecolor = () => {
    if(window.scrollY > 50) {
      setBg(true);
    } else {
      setBg(false)
    }
  }
 

  window.addEventListener("scroll", changecolor);


  return (
     <div className='flex justify-center'>
      <div className={bg ? 'nav-head nav-head-changed mt-[0rem] bg-[#00000085] ease-in-out duration-[.8s]  backdrop-blur-[10px] border-b-[.5px] border-l-[.5px] border-r-[.5px] border-t-[.5px] border-[#ffffff49] border-t-[#000] text-[#ffffffad] rounded-b-[2.5rem] fixed w-[74%] z-[1000] ' : 'nav-head mt-[4rem]  bg-[#1d2429]  backdrop-blur-[10px] border-[.5px] rounded-[2.5rem] border-[#2A2B37] text-[#ffffffad] ease-in-out duration-1000 fixed w-[74%]  z-[1000]  '}>
        <div className="nav-bar w-[100%] px-[2rem] flex py-[.8rem]  items-center justify-between flex-row text-[4.5rem] font-[N-B-1] ">
          <div className="logo"><h1 className='text-[white] font-[logo-font]'>P-CUBE</h1></div>
            <ul className='nav-items flex p-[1rem]  cursor-pointer '>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Home</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>About</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Skills</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Projects</li>
                <li className='px-[1rem] hover:text-[white] cursor-pointer'>Contacts</li>
                <div className='pl-[5rem]' >?</div>
            </ul>
        </div>
    </div>
     </div>
    
  )
}

export default NavBar