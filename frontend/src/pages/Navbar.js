import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavToggle = () => {

    setNavOpen(!navOpen);

  };

  const handleClick = () => {

    navigate('/forms');

};

  return (

    <div className='fixed top-0 left-0 right-0 flex justify-between items-center h-24 mx-auto px-8 bg-[#0E46A3]'>

      <div className='container mx-auto px-4 h-24 flex items-center text-white'>

        <div>

          <img src={logo} alt='Logo' className='h-20 px-2' />

        </div>

        <h1 className='text-3xl font-bold'>ParSUCAT Online Application</h1>

        <div className='md:hidden' onClick={handleNavToggle}>

          {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}

        </div>

        <div className={`md:hidden fixed left-0 top-0 md:w-[80%] h-full bg-[#0E46A3] z-50 transition-transform duration-300 ease-in-out transform ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='container mx-auto px-4 h-24 flex items-center text-white'>

            <div>

              <img src={logo} alt='Logo' className='h-20' />

            </div>

            <h1 className='text-3xl font-bold'>PARSUCAT Application Form</h1>

          </div>

          <ul className='uppercase flex flex-col space-y-1'>

            <li className='text-center py-3 px-4 border-b border-b-gray-600'>Log <span>In</span></li>

            <li className='text-center py-3 px-4'>About</li>

            <button

              className='bg-[#387ADF] text-white text-2xl px-11 py-4 rounded-md font-bold uppercase w-full hover:bg-gray-300 hover:text-black transition-colors'

              onClick={handleClick}> Apply <span className='ml-1'> Now</span> </button>

          </ul>

        </div>

      </div>

      <ul className='hidden md:flex space-x-4 uppercase'>

        <li className='flex items-center p-4 text-white'> Log <span className='ml-1'> In </span> </li>

        <li className='flex items-center p-4 text-white'> About </li>

        <button

          className='bg-[#387ADF] text-white text-2xl px-6 py-2 rounded-md font-bold uppercase flex items-center justify-center w-full hover:bg-gray-300 hover:text-black transition-colors'
          onClick={handleClick}> Apply <span className='ml-1'> Now</span> </button>

      </ul>

    </div>

  );

};

export default Navbar;