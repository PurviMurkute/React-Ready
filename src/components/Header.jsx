import React from 'react'
import { SiReactos } from "react-icons/si";

const Header = () => {
  return (
    <div className='w-full bg-[#f2dd89] fixed top-0 left-0 z-10 px-5 py-2'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center space-x-2'>
                <SiReactos className='text-[#0f172a] text-2xl' />
                <span className='text-[#0f172a] text-2xl font-bold'>React Ready</span>
            </div>
            <div className='flex space-x-4 text-[#0f172a] font-medium'>
                <p>Home</p>
                <p>Projects</p>
            </div>
        </div>
    </div>
  )
}

export default Header
