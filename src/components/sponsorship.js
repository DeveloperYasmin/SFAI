import React from 'react';
import Header from './Header';
import Footer from "./Footer"

const Sponsorship = () => {
  return (
    <div className="bg-white font-serif select-none">
      <Header />
      <div className='text-center px-4 lg:px-0'>
        <h1 className='text-gray-500 mt-8 lg:mt-0'>LEADERS AND EXPERTS</h1>
        <h1 className='text-purple-800 mt-2 font-extrabold text-3xl'>FEATURED SPEAKERS</h1>
        <p className='mt-2'>
          Anticipate a dynamic assembly of visionary thinkers and seasoned specialists, who will <br/> generously impart their wisdom, perspectives, and prognostications in the field.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 lg:mt-12">
        <div className="flex flex-col items-center mb-6 lg:mb-0 lg:mr-6">
          <img src="1.png" className="mb-2" alt="Speaker 1" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center mb-6 lg:mb-0 lg:mr-6">
          <img src="2.png" className="mb-2" alt="Speaker 2" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center mb-6 lg:mb-0 lg:mr-6">
          <img src="3.png" className="mb-2" alt="Speaker 3" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src="4.png" className="mb-2" alt="Speaker 4" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src="5.png" className="mb-2" alt="Speaker 5" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img src="6.png" className="mb-2" alt="Speaker 6" />
          <p className='text-center text-purple-800 font-semibold'>Lorem ipsum</p>
          <p className='text-center font-semibold'>CREATIVE DESIGNER</p>
          <div className="bg-gray-300 p-2 inline-block">
            <img src="link.png" alt="link" className="block mx-auto" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Sponsorship;
