import React from 'react'
import About from './components/About'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[400px]'>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <About />
        </div>
      </div>
    </>
  )
}

export default App