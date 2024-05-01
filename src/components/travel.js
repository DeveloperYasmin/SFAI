import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Travel = () => {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <img className='w-full h-72' src="3x.png" alt="3x" />
      </div>
      <div className='mt-10 text-center'>
        <h1 className='font-bold text-5xl text-black'>CHOOSE YOUR <span className='text-purple-800'>TICKET</span></h1>
        <button className='bg-gray-300 text-black font-bold text-lg mt-4 px-6 py-2'>VIEW ALL TICKETS</button>
      </div>
      <div className='text-center mt-10'>
        <h2 className='font-bold text-xl text-purple-800'>PRICING PLANS</h2>
        <hr className='my-3' />
        <p className='mx-8'>Attending such an event can expose you to different ways of thinking about economic issues and help you broaden your understanding of the field.</p>
      </div>
      <div className='md:flex justify-center mt-5 ml-10 md:ml-0'>
        <div className='border hover:bg-purple-400 border-black h-80 w-64 mx-2'>
          <div className='px-4'>
            <h3 className='mt-4 text-lg font-bold text-gray-500 hover:text-white'>🟣 STANDARD</h3>
            <h4 className='mt-5 text-4xl font-extrabold text-purple-800'>$850</h4>
            <p className='mt-3 text-xl font-bold text-black'>Main <br/> Conference</p>
            <p className='mt-2'>Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.</p>
            <button className='mt-8 text-purple-800 hover:text-white'>BUY TICKET NOW</button>
          </div>
        </div>
        <div className='border mt-2 md:mt-0 hover:bg-purple-400 border-black h-80 w-64 mx-2'>
          <div className='px-4'>
            <h3 className='mt-4 text-lg font-bold text-gray-500 hover:text-white'>🟪 PREMIUM</h3>
            <h4 className='mt-5 text-4xl font-extrabold text-purple-800'>$950</h4>
            <p className='mt-3 text-xl font-bold text-black'>Conference & Workshop</p>
            <p className='mt-2'>Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshop.</p>
            <button className='mt-2 text-purple-800 hover:text-white'>BUY TICKET NOW</button>
          </div>
        </div>
        <div className='border mt-2 md:mt-0 hover:bg-purple-400 border-black h-80 w-64 mx-2'>
          <div className='px-4'>
            <h3 className='mt-4 text-lg font-bold text-gray-500 hover:text-white'>💜 PREMIUM TICKET</h3>
            <h4 className='mt-5 text-4xl font-extrabold text-purple-800'>$1250</h4>
            <h5 className='mt-3 text-xl font-bold text-black'>Superpass <br /> Conference + 1</h5>
            <p className='mt-2'>Everything from General Admission and you get full, exclusive access for a year.</p>
            <button className='mt-8 text-purple-800 hover:text-white'>BUY TICKET NOW</button>
          </div>
        </div>
      </div>
      <div className='md:ml-40'>
      <Footer />
      </div>
    </div>
  );
}

export default Travel;
