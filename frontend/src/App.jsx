import React from 'react'
import Home from './home/Home'
import { Route, Routes } from "react-router-dom"
import Mobile from './mobile/Mobile'
import Signup from './components/Signup'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mobiles" element={<Mobile />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/Contact" element={<Contact />} />
    </Routes>
    </div>
    </>
  )
}

export default App