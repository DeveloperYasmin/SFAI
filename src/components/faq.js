import React from 'react'
import Header from './Header'
import Footer from './Footer'

const faq = () => {
  return (
    <div>
        <Header/>
        <div className=' text-center'>
            <h1 className='text-gray-500'>WHAT WE OFFER</h1>
            <h1 className='text-purple-800 font-bold text-4xl mt-2 '>WHY ATTEND THE SAN FRANCISCO <br/> AI CONFERENCE?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-60 ml-10 mt-10 w-[70%]">
  <div className="md:col-span-1">
    <img className="h-80 w-full" src="Group.png" alt="" />
    <h1 className="mt-5 text-xl font-bold">Unparalleled Knowledge</h1>
    <p className="mt-5">
      Gain a comprehensive understanding of AI's latest trends, advancements,
      and challenges. Our diverse sessions will cover cutting-edge topics
      beyond the conventional, ensuring you stay one step ahead in this rapidly
      evolving field.
    </p>
  </div>

  <div className="md:col-span-1 ">
    <img className="h-80 w-full" src="Group1.png" alt="" />
    <h1 className="mt-5 text-xl font-bold">Networking Opportunities</h1>
    <p className="mt-5">
      Connect with industry leaders, influential professionals, and fellow AI
      enthusiasts. Forge meaningful connections that can shape your career and
      open doors to new collaborations and partnerships.
    </p>
  </div>

  <div className="md:col-span-1">
    <img className="h-80 w-full" src="Group2.png" alt="" />
    <h1 className="mt-5 text-xl font-bold">Career Development</h1>
    <p className="mt-5">
      Discover exciting career opportunities in the realm of AI. Whether
      you're a seasoned professional or just starting your journey, our
      conference offers valuable insights and guidance to navigate the AI
      landscape and accelerate your professional growth.
    </p>
  </div>

  <div className="md:col-span-1">
    <img className="h-80 w-full" src="Group3.png" alt="" />
    <h1 className="mt-5 text-xl font-bold">Engaging Discussions</h1>
    <p className="mt-5">
      Engage in dynamic conversations and thought-provoking discussions with
      like-minded individuals who share your passion for AI. Explore new
      perspectives, exchange ideas, and contribute to shaping the future of
      this transformative technology.
    </p>
  </div>
</div>
<div className='md:ml-52'>
   <Footer/>
   </div>
    </div>
  )
}

export default faq