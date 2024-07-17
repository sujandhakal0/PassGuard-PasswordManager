import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-[#031326]'>
      <nav className='mycontainer h-14 px-4 py-5 text-[#e0e1e4] shadow-md flex justify-between items-center'>
        <div className='logo font-bold text-[#e0e1e4] text-2xl relative'>
          <span className='absolute -left-4 text-3xl text-[#F39C12]'>&lsaquo;</span>
          PASS<span className='text-[#F39C12]'>GUARD</span>
          <span className='absolute -right-4 text-3xl text-[#e0e1e4]'>&rsaquo;</span>
        </div>
        <ul className='flex gap-4 text-[#c1c4ca] cursor-pointer'>
          <li className='hover:font-bold'>Home</li>
          <li className='hover:font-bold'>About</li>
          <li className='hover:font-bold'>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar