import React from 'react'

const HigherSecondary = () => {
  return (
    <div className='bg-[#303238] h-screen'>
        <div className='bg-[#303238] h-[47px] shadow-md flex items-center'>
            <div className='flex flex-row ml-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#81848F" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5" />
                </svg>
                <h1 className='text-white text-sm font-semibold font-mono ml-2'>Higher Secondary</h1>
            </div>
        </div>
        <div>
          <h1 className='text-white mt-3 ml-5'>Test Page For Routing In HSC</h1>
        </div>
    </div>
  )
}

export default HigherSecondary