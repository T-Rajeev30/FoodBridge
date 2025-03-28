import React from 'react'

function Whyus() {
  return (
    <div className=' py-[10%] flex items-center flex-col gap-10 justify-center h-screen bg-white'>
        <h1 className='font-bold text-[#4e220a] text-[2vw]'>Why Choose Food Bridge?</h1>
        <ul className='text-[1.2vw] flex flex-col gap-5 font-medium bg-[#4e220a] p-10 text-white rounded-xl'>
        <li>
                Smart Food Redistribution – Restaurants can easily upload images of surplus food, and our system ensures it reaches the right people in need.
           </li> 
           <li>
                Freshness & Safety First – We prioritize food quality by ensuring only fresh and safe food is redistributed.
           </li>
           <li>
                Seamless Matching – Our platform automatically connects surplus food with registered NGOs, streamlining the donation process.
           </li>
           <li>
                Supporting Communities – By bridging the gap between surplus food and those in need, we help reduce hunger and support underprivileged communities.
           </li>
           <li>
                Easy & Hassle-Free – Restaurants and NGOs can register on our website and start making a real impact with minimal effort.
           </li>
        </ul>
           
        
    </div>
  )
}

export default Whyus