import React from 'react'
import { Routes, Route , useLocation } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Cards from './pages/Cards';
import Programs from './pages/Programs';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {

    const location = useLocation();

  return (

    <>
    
    <AnimatePresence>

        <Routes location={location} key={location.pathname}>

        <Route path="/" element={<div> <Navbar /> <Hero /> <Cards /> </div>} />

        <Route path="/programs" element={<div> <Navbar /> <Programs /> </div>} />
        
      </Routes>

    </AnimatePresence>

    </>

  )

}

export default AnimatedRoutes