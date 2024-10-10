import React from 'react'

const WiproLimited = () => {
  return (
    <div className='bg-[#303238] h-screen'>
        <div className='bg-[#303238] h-[47px] shadow-md flex items-center'>
            <div className='flex flex-row ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#81848F" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>
                <h1 className='text-white text-sm font-semibold font-mono ml-2'>Wipro Limited</h1>
            </div>
        </div>
        <div className='bg-[#2B2C30] w-[500px] h-[250px] ml-20 mt-20 rounded-md'>
          <div className='absolute ml-4 mt-4'>
            <h1 className='text-white font-bold'>Wipro Limited</h1>
            <h1 className='text-white text-sm mt-2'>I joined Wipro Limited on 21 August 2019 as a Associate</h1>
            <h1 className='text-white text-sm mt-2'>Location : Kolkata</h1>

            <h1 className='text-white font-bold text-sm mt-2'>Skill Aquired:</h1>
            <h1 className='text-white text-sm mt-2'>Trained to swiftly address hardware and software problems,</h1>
            <h1 className='text-white text-sm mt-2'>ensuring seamless client systems.</h1>

            <h1 className='text-white font-bold text-sm mt-2'>Experience :</h1>
            <h1 className='text-white text-sm mt-2'>21-Aug-2019 - 12-Jan-2021</h1>
          </div>
        </div>
    </div>
  )
}

export default WiproLimited