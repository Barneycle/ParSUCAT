import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FaUserGraduate, FaExchangeAlt, FaFileAlt } from 'react-icons/fa';

export default function Form(){

  return (

    <div className="flex justify-center items-center h-screen">

      <div className="mt-8 max-w-fit mx-auto px-4 py-10 text-center">

        <h2 className="text-4xl font-bold mb-8">Choose Your Application Type</h2>

        <div className="grid grid-cols-1 gap-4">

          <Link to="/freshmen" className="w-full">

            <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-8 rounded-lg shadow-md transition-colors duration-300 text-2xl w-full">

              <FaUserGraduate className="mr-4 text-4xl" /> Freshmen

            </button>

          </Link>

          <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-8 rounded-lg shadow-md transition-colors duration-300 text-2xl w-full">

            <FaExchangeAlt className="mr-4 text-4xl" /> Transferee

          </button>

          <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-8 rounded-lg shadow-md transition-colors duration-300 text-2xl w-full">

            <FaFileAlt className="mr-4 text-4xl" /> Student Personal Record

          </button>

        </div>

      </div>

    </div>

  );
  
}
