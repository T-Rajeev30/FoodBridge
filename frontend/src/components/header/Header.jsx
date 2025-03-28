import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <nav className='fixed z-50 top-0 bg-[#FEDE19] w-[90%] h-[10vh] mt-6 ml-[4vw] rounded-xl flex items-center justify-center'>
        <nav className='flex items-center justify-between gap-[10vw] p-2 '>
            <nav>
                <h1 className='font-impact text-[#4E220A] font-black text-[2vw]'>FOODBRIDGE</h1>
            </nav>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            <li>
                <NavLink
                to="/"
                    className={({isActive}) =>
                        `block py-2 pr-4 pl-3 text-[1.2vw] font-medium duration-200 ${isActive ? "text-orange-700": "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                        <NavLink 
                        to="/whyus"
                            className={({isActive}) =>
                                `block py-2 pr-4 pl-3 text-[1.2vw] font-medium duration-200 ${isActive ? "text-orange-700" :"text-gray-700"}
                            border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Why Us
                        </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => 
                        `block py-2 pr-4 text-[1.2vw] font-medium pl-3 duration-200 ${isActive ? "text-orange-700" :"text-gray-700"}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                        Contact Us
                    </NavLink>
                </li>
                
            </ul>
           
            <nav className='flex items-center gap-5'>
                <Link
                to="loginngo"
                className="border-2 h-[3vw] border-[#4E220A] rounded-xl text-[1.2vw] font-medium w-[10vw] flex items-center justify-center"
                >
                Login
                </Link>

                {/* <button className='border-2 h-[3vw] border-[#4E220A] rounded-xl p-1 text-[1.2vw] font-medium w-[10vw]'>Login</button> */}
                <Link to="SignupNgo" className=' text-white h-[3vw] bg-[#4E220A] rounded-xl p-1 font-medium text-[1.2vw] w-[10vw] flex items-center justify-center' >
                Join as NGO
                </Link>
                <Link to="SignupRestaurant" className=' text-white h-[3vw] bg-[#4E220A] rounded-xl p-1 font-medium text-[1.2vw] w-[10vw] flex items-center justify-center' >
                Resturant
                </Link>
                
            </nav>
        </nav>
    </nav>
  )
}

export default Header