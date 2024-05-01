import React from 'react';
import Header from './Header';
import Timer from './Timer';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className='text-center'>
        <h1 className='text-4xl text-black'>DON'T MISS OUT ON </h1>
        <h1 className='text-4xl mt-2 text-purple-800 font-bold'>THIS EXTRAORDINARY EVENT!</h1>
        <p className='mt-5'>Register now to secure your spot at the San Francisco AI Conference. 
          Experience the thrill of being part <br/>of a groundbreaking conference that pushes the boundaries of AI exploration. Together, let's unlock <br/>
           the limitless possibilities of artificial intelligence.</p>
        <button className='bg-purple-800 text-white mt-6 rounded-full w-36 p-2'>Register Now</button>
      </div>

      <div className='bg-black mt-5 text-gray-400'>
        <div className='text-center lg:text-left lg:flex lg:items-center  lg:ml-64'>
          <div>
            <h1 className='text-4xl text-white font-semibold'>COUNT EVERY </h1>
            <h1 className='text-4xl font-bold text-purple-700'> SECOND UNTIL EVENT </h1>
          </div>
          <Timer />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 lg:ml-64 gap-2  mt-10'>
          <div>
            <h1 className='text-4xl font-extrabold text-white'>SFAI</h1>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div>
            <h1 className='text-xl text-purple-700'>QUICK LINKS</h1>
            <ul className='mt-5'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">SPEAKERS</Link></li>
              <li><Link to="/sponsorship">SPONSORSHIP</Link></li>
              <li><Link to="/travel">TRAVEL</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contactus">CONTACTUS</Link></li>
            </ul>
          </div>

          <div className='lg:-ml-28'>
            <h1 className='text-xl text-purple-700'>CONTACT US</h1>
            <p className='mt-5'>27 Division St, San Francisco,<br/> SF 94016, USA</p>
            <p>+1 800 123 456 789</p>
            <img src="link.png" alt="link" />
          </div>

          <div className='lg:-ml-28'>
            <h1 className='text-xl text-purple-700'>SUBSCRIBE</h1>
            <p className='mt-5'>Get news and updates  💜</p>
            <p>________________________</p>
            <p>Our expertise, as well as our <br/> passion for web design, sets <br/> us apart from other agencies.</p>
          </div>
        </div>
      <div className='lg:ml-64'>
        <hr className='my-3 ' />
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
