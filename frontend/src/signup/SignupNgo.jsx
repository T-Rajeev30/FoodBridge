import React, { useState } from 'react'



const SignupNgo = () => {
  const [ngoName, setNgoName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
    const [ngoReg, setNgoReg] = useState("");


  const handleSignup = async (e) => {

    // alert("Resturant Registered!");
  }
  return (
    <>

      <div className='bg-[#98d0f8] w-[100%] h-screen overflow-y-hidden'>

        <div className=' bg-[#98d0f8] flex justify-center items-center h-[100%]'>

          <div className=' bg-white py-5 rounded-3xl w-[55%] '>

            <h2 className='text-2xl text-[#4e220a] font-semibold text- text-center mb-6 mt-0 pt-0 '>NGO Sign Up</h2>

            <form className='h- 
            flex flex-col gap-4 px-20 py-4' onSubmit={handleSignup}>

              <span className='flex flex-wrap gap-2'>
              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='NGO Name' value={ngoName} onChange={(e) => { setNgoName(e.target.value) }} required/>

              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Contact' value={contact} onChange={(e) => { setContact(e.target.value) }} required/>
              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required/>
                      

              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='NGO Registration' value={ngoReg} onChange={(e) => { setNgoReg(e.target.value) }} required/>
              
              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a] ' type="text" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required/>

              <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type="text" placeholder='Address' value={address} onChange={(e) => { setAddress(e.target.value) }} required/>
          
              </span>

              <button className='bg-[#4e220a] text-white py-4 rounded-full w-[50%] self-center' type='submit'>Sign Up</button>

            </form>
            
          </div>
          
        </div>
        <img src="/third.png" alt="" className='absolute bottom-4 left-2 rounded-full w-[20vw] h-[20vw]' />
      </div>
      
    </>
  )
}

export default SignupNgo
