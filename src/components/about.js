import React from 'react'
import Footer from "./Footer"

import Header from './Header'

const about = () => {
  return (
    <div className="bg-white  select-none font-serif w-screen h-screen bg-no-repeat bg-center  bg-fixed bg-cover">
        <Header/>
        <div className="flex ml-10 flex-col md:flex-row">
      <div className="md:w-1/3 md:pr-10">
        <p className='text-gray-500'>WELCOME TO </p>
        <h1 className='text-black font-bold text-4xl'>SAN FRANCISCO</h1>
        <h1 className='text-purple-800 font-bold text-4xl'>AI CONFERENCE</h1>

        <img className=' w-[60%] md:w-[80%] mt-5' alt="image" src="image2.png" />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0">
        <p>Join us for an extraordinary event at the forefront of artificial intelligence innovation. Founded by a passionate group of technologists and engineers, the San Francisco AI Conference is the ultimate gathering for those eager to explore the limitless potential of AI. Prepare to be captivated by thought-provoking discussions, enlightening presentations, and unrivaled networking opportunities.</p>
        <p className='mt-2 md:mt-5'>At the San Francisco AI Conference, we go beyond the ordinary. Our mission is to delve into AI topics that have yet to be thoroughly explored. Join us as we uncover the groundbreaking impacts of AI across various industries and sectors. From technical innovation to the realms of art, music, criminal justice, immigration, and countless others, we'll shed light on the limitless possibilities that AI holds for the future.</p>
        <p className='mt-2 md:mt-5'> What sets us apart are the prestigious and world-renowned speakers who will grace our stage. These luminaries, experts in their respective fields, will share their insights, experiences, and visions for the future of AI. Be prepared to be inspired, challenged, and enlightened as they take you on an extraordinary journey.</p>
      </div>
    </div>
    <Footer/>
      </div>
  )
}

export default about