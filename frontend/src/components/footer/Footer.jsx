import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-[#4E220A] w-[100%] h-[50vh] p-10 flex flex-col justify-center gap-20'>
        <div className='flex align-center justify-around'>
            <div className='font-impact text-[#FD5c26] font-black text-2xl '>
                FOODBRIDGE
            </div>
            <div className='text-white'>
                <h1 className='font-impact text-[#ffffff] font-black text-2xl '>More Info</h1>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Recipe Information</li>
                <li>Gift Cards</li>
            </div>
            <div className='text-white'>
                <h1 className='font-impact text-[#ffffff] font-black text-2xl'>Company</h1>
                <li>About Us</li>
                <li>Career & Training</li>
                <li>Press and Media</li>
                <li>Our Story</li>
            </div>
            <div className='text-white'>
                <h1 className='font-impact text-[#ffffff] font-black text-2xl' >Social Media</h1>
                <li>facebook</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Twitter</li>
            </div>
        </div>
        
        <div className='text-white align-center flex justify-center' >
            © 2024 ALL RIGHTS RESERVED.FOODBRIDGE®
        </div>
    </div>
    
    
    </>
  )
}

export default Footer