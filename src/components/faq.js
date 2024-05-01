import React from 'react'
import Header from './Header'

const faq = () => {
  return (
    <div>
        <Header/>
        <div className=' text-center'>
            <h1 className='text-gray-500'>WHAT WE OFFER</h1>
            <h1 className='text-purple-800 font-bold text-4xl mt-2 '>WHY ATTEND THE SAN FRANCISCO <br/> AI CONFERENCE?</h1>
        </div>
       <div className=' md:flex'>
        <div className='md:ml-60 ml-20 mt-10'>
            <img className='h-80' src="Group.png" alt=""/>
            <h1 className='mt-5 text-xl font-bold'>Unparalleled Knowledge</h1>
            <p className='mt-5'>Gain a comprehensive understanding of AI's latest <br/> trends, advancements, and challenges. Our diverse<br/> sessions will cover cutting-edge topics beyond the <br/> conventional, ensuring you stay one step ahead in <br/> this rapidly evolving field.</p>
        </div>

        <div className='ml-20  mt-10'>
            <img className='h-80' src="Group1.png" alt=""/>
            <h1 className='mt-5 text-xl font-bold'>Networking Opportunities</h1>
            <p className='mt-5'>Connect with industry leaders, influential professionals,<br/> and fellow AI enthusiasts. Forge meaningful connections <br/> that can shape your career and open doors  to new <br/> collaborations and partnerships.</p>
        </div>
        </div>
       
        <div className=' md:flex'>
        <div className='md:ml-60 ml-20 mt-10'>
            <img className='h-80' src="Group2.png" alt=""/>
            <h1 className='mt-5 text-xl font-bold'>Career Development</h1>
            <p className='mt-5'>Discover exciting career opportunities in the realm of <br/>AI. Whether you're a seasoned professional or just <br/> starting your journey, our conference offers valuable <br/> insights and guidance to navigate the AI landscape<br/>
             and accelerate your professional growth.</p>
        </div>

        <div className='ml-20 mt-10'>
            <img className='h-80' src="Group3.png" alt=""/>
            <h1 className='mt-5 text-xl font-bold'>Engaging Discussions</h1>
            <p className='mt-5'>Engage in dynamic conversations and thought- <br/>provoking discussions with like-minded individuals who <br/> share your passion for AI. Explore new perspectives,<br/> exchange ideas, and contribute to shaping the future <br/> of  this transformative technology.</p>
        </div>
        </div>
    </div>
  )
}

export default faq