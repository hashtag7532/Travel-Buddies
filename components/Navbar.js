import React from 'react'
import Link from "next/link"


function Navbar() {
  return (
    <div className='bg-black text-white flex flex-row md:flex-row p-4 justify-between '>
      <div className='flex items-center justify-left ml-20 text-[24px]'>TRAVEL BUDDIES</div>
    <div className='flex flex-row '>
        <Link href="/">
            <button className='navButton'>Home</button>
        </Link>
        
        <Link href="/about">
            <button className='navButton'>About</button>
        </Link>

        <Link href="/ride">
            <button className='navButton'>Get a Ride</button>
        </Link>
        <Link href="#">
          <button className="bg-[#EA3535] hover:bg-[#ffc7c7] text-white font-bold py-2 px-4 border-b-4 hover:text-[#5c4d4d] border-[#ffc7c7] hover:border-[#ea3535] rounded">Sign Up/ Sign In</button>
        </Link>
    </div>
    </div>
  )
}

export default Navbar