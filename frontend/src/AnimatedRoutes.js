import React from 'react'
import { Routes, Route , useLocation } from 'react-router-dom'
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Cards from './pages/Cards';
import Programs from './pages/Programs';
import Form from './pages/Form';
import { AnimatePresence } from 'framer-motion';
import Freshmen from './pages/Freshmen';

function AnimatedRoutes() {

    const location = useLocation();

  return (

    <>
    
    <AnimatePresence>

        <Routes location={location} key={location.pathname}>

        <Route path="/" element={<div> <Navbar /> <Hero /> <Cards /> </div>} />

        <Route path="/programs" element={<div> <Navbar /> <Programs /> </div>} />

        <Route path="/freshmen" element={<div> <Freshmen /> </div>} />

        <Route path="/forms" element={<div> <Form /> </div>} />
        
      </Routes>

    </AnimatePresence>

    </>

  )

}

export default AnimatedRoutes