import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const LoginNgo = ({ userType }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    alert(`${userType} Logged In!`);
    navigate(`/${userType.toLowerCase()}-dashboard`);
  };

  return (
    <>
    <div className='bg-[#98d0f8] h-screen flex justify-center items-center'>
    {/* <h1 className='absolute top-4 left-8 text-[#4e220a] text-2xl font-bold m-0 p-0'>FOODBRIDGE</h1> */}
      <div className='bg-white py-6 px-12 rounded-3xl w-[40%] shadow-lg'>
        <h2 className='text-2xl text-[#4e220a] font-semibold text-center mb-6'>{userType} Login</h2>
        <form className='flex flex-col gap-4' onSubmit={handleLogin}>
          <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className='p-3 border border-[#4e220a] rounded-full text-[#4e220a]' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button onClick={() => navigate("/NGODashBoard")} className='bg-[#4e220a] text-white py-4 rounded-full w-[50%] self-center' type='submit'>Login</button>
        </form>
      </div>
      <img src="/second.png" alt="" className='absolute bottom-4 right-2 w-[20vw] h-[20vw]' />
    </div>
    </>
  );
};

export default LoginNgo;
