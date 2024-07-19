import React from 'react'
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='w-full bg-[#031326] pt-4'>
      <nav className='mycontainer h-14 px-4 py-5 text-[#e0e1e4] shadow-md flex justify-between items-center'>
        <div className='logo font-bold text-[#e0e1e4] text-2xl relative'>
          <span className='absolute -left-4 text-3xl text-[#F39C12]'>&lsaquo;</span>
          PASS<span className='text-[#F39C12]'>GUARD</span>
          <span className='absolute -right-4 text-3xl text-[#e0e1e4]'>&rsaquo;</span>
        </div>

        <button className='flex items-center justify-center gap-3  hover:bg-[#f39d12e0] rounded-full px-3 py-2 text-white ring-white ring-2'>
        <FaGithub className='text-xl text-white ' /> Login
        </button>
      </nav>
    </div>
  )
}

export default Navbar