import React from 'react'

function Header() {
  return (
    <nav className='sticky z-50 top-0 bg-[#FEDE19] w-[90%] h-[10vh] mt-6 ml-[4vw] rounded-xl flex items-center justify-center'>
        <nav className='flex items-center justify-between gap-[10vw] p-2 '>
            <nav>
                <h1 className='font-impact text-[#4E220A] font-black text-[2vw]'>FOODBRIDGE</h1>
            </nav>
            <nav className='text-[1.2vw] font-medium'>
                Why us?
            </nav>
            <nav className='text-[1.2vw] font-medium'>
                Contact Us
            </nav>
            <nav className='flex items-center gap-5'>
                <button className='border-2 h-[3vw] border-[#4E220A] rounded-xl p-1 text-[1.2vw] font-medium w-[10vw]'>Login</button>
                <button className=' text-white h-[3vw] bg-[#4E220A] rounded-xl p-1 font-medium text-[1.2vw] w-[10vw]'>Join as NGO</button>
                <button className=' text-white  h-[3vw] bg-[#4E220A] rounded-xl p-1 font-medium text-[1.2vw] w-[10vw]'>Resturant</button>
            </nav>
        </nav>
    </nav>
  )
}

export default Header