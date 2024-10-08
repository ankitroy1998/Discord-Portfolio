import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Sidebar from './components/Sidebar'
import UnderGraduate from './components/UnderGraduate';
import PostGraduate from './components/PostGraduate';
import HigherSecondary from './components/HigherSecondary';
import Secondary from './components/Secondary';
import LTIMindtree from './components/LTIMindtree';
import WiproLimited from './components/WiproLimited';

const App = () => {
  return (
    <>
    <Router>
      <div className='flex'>
        <div className='w-[400px]'>
          <Sidebar/>
        </div>
        <div className='w-full'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/postgraduate" element={<PostGraduate />} />
            <Route path="/undergraduate" element={<UnderGraduate />} />
            <Route path="/highersecondary" element={<HigherSecondary />} />
            <Route path="/secondary" element={<Secondary />} />
            <Route path="/ltim" element={<LTIMindtree />} />
            <Route path="/wipro" element={<WiproLimited />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App