import React from 'react'

function Home() {
  return (
    <div className=' h-auto bg-gradient-to-b from-white to-[#FEF5E9]'>
        <div>
            <div className='flex items-center justify-center gap-10 mt-8'>
                <div className=' bg-[url(/first.png)] w-[40%] h-[60vh] rounded-xl bg-cover bg-center flex items-end  p-3 ' >
                    <h1 className='uppercase text-white font-bold text-[3vw]'>A meal today, <br /> hope for tomorrow.</h1>
                    {/* <button  className='bg-[#fd5c26] p-2 text-white rounded font-medium text-[1.2vw]'>About us</button> */}
                </div>
                <div className='bg-[#3cc0e8] w-[40%] h-[60vh] rounded-lg flex flex-col items-end justify-end p-5 gap-5'>
                    <img className='w-[8vw] h-[8vw]' src="/second.png" alt="" />
                    <div>
                        <h1 className='text-[3vw] font-bold text-[#103a54]'>
                            HELP US SERVE <br/> MILLIONS OF SMILES!
                        </h1>
                    </div>
                    <div>
                        <button  className='bg-[#fd5c26] p-2 text-white rounded-xl font-medium text-[1.2vw]'>Create your account</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h1 className='text-[6vw] font-bold text-[#4e220a] '>FROM EXCESS TO <span className='text-[#fd5c26]'>ACCESS</span> </h1>
            </div>
        </div>
        <div className='flex items-center justify-around p-9 gap-10'>
            <div className='flex items-start gap-5  flex-col'>
                <div>
                    <h1 className='text-[3vw]'>🔥</h1>
                    <h1 className='text-[#4E220A] text-[1.5vw] uppercase font-bold'>Nourishment for All</h1>
                        <p className='text-[#4E220A] text-[1.2vw]'>FoodBridge ensures everyone gets <br />
                        access to nutritious and wholesome <br />
                        meals, packed with essential <br />
                        vitamins and minerals.</p>
                </div>
                <div>
                <h1 className='text-[3vw]'>🥗</h1>
                    <h1 className='text-[#4E220A] text-[1.5vw] uppercase font-bold'>Healthy & Tasty</h1>
                        <p className='text-[#4E220A] text-[1.2vw]'>Our meals prove that healthy food <br />
                        can also be delicious, promoting <br />
                        well-being without compromising on taste.</p>
                </div>
            </div>
            <div className='bg-[url(/third.png)] bg-cover bg-center rounded-2xl bg-white h-[40vh] w-[15%]'>

            </div>
            <div className='flex items-start gap-5  flex-col'>
                <div>
                <h1 className='text-[3vw]'>❤️</h1>
                    <h1 className='text-[#4E220A] text-[1.5vw] uppercase font-bold'>Made with Love</h1>
                        <p className='text-[#4E220A] text-[1.2vw]'> Every meal is prepared with care <br />
                        and compassion, ensuring that <br />
                        no one goes to bed hungry.</p>
                </div>
                <div>
                <h1 className='text-[3vw]'>🤝</h1>
                    <h1 className='text-[#4E220A] text-[1.5vw] uppercase font-bold'>Connecting Communities</h1>
                        <p className='text-[#4E220A] text-[1.2vw]'>FoodBridge fosters a network of kindness, <br />
                        connecting donors, volunteers, and  <br />
                        those in need to build a hunger-free world.</p>
                </div>
            </div>
        </div>
        <div className='bg-[#4e220a]'>
            <div className='flex items-center justify-center gap-4'>
                <div className='flex items-center justify-center flex-row gap-4 h-[5vw] w-[5vw] bg-white rounded-full'>
                    <img src="" alt="" />
                </div>
                <div className='flex items-center justify-center flex-row gap-4 h-[5vw] w-[5vw] bg-white rounded-full'>
                    <img src="" alt="" />
                </div>
                <div className='flex items-center justify-center flex-row gap-4 h-[5vw] w-[5vw] bg-white rounded-full'>
                    <img src="" alt="" />
                </div>
                <div className='flex items-center justify-center flex-row gap-4 h-[5vw] w-[5vw] bg-white rounded-full'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
        <div className='bg-[#FEF5E9] p-2'>
            <div>
                <button className='bg-[#fede19] p-2 rounded-md font-bold text-[#4e220a]'>Fresh Delight</button>
            </div>
            <div className='text-[#4e220a] uppercase text-[6vw] font-bold p-2'>
                <h1>FRESH SUPPLIES <span className='text-[#89B92D]'>ASSURE</span>  <br /> SUPERIOR MEALS </h1>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
        <div className='bg-[#123b15] flex items-center justify-center flex-col gap-[10vw] text-center p-2 pb-3'>
            <div>
                <h1 className='uppercase font-bold text-[3.3vw] text-[#cbf38c]'>
                Wholesome meals 🍛 fuel lives, <br />
                support health, and nourish communities.
                </h1>
            </div>
            <div className='flex items-center gap-[20vw]'>
                <button className='bg-[#fede19] p-2 text-[#4e220a] rounded text-[1.3vw] font-bold'>Explore Recipe</button>
                <button className='bg-[#fd5c26] p-2 text-[#ffffff] rounded text-[1.3vw] font-bold'>Order FoodBridge</button>
            </div>
        </div>
        <div className='bg-[#fede19] flex items-center justify-center flex-col gap-[10vw] text-center p-2 pb-3'>
            <div>
                <h1 className=' font-bold text-[3.3vw] text-[#4e220a]'>
                Meet the high nutrition plates
                </h1>
            </div>
            <div className='flex items-center gap-[20vw]'>
                <button className='bg-[#fd5c26] p-2 text-white rounded text-[1.3vw] font-bold'>Explore Recipe</button>
                <button className='bg-white p-2 text-[#4e220a] rounded text-[1.3vw] font-bold'>Order FoodBridge</button>
            </div>
        </div>
    </div>
  )
}

export default Home