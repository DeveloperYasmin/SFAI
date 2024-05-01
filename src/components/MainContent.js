import Timer from "./Timer";
import Footer from "./Footer"

const MainContent = () => {
  return (
    <main id="main-content">
      <div className="select-none">
      <p className="md:text-6xl text-2xl md:w-[48%] font-extrabold font-serif p-10 -mt-20 bg-gradient-to-r bg-clip-text from-red-600 to-blue-700 text-transparent">
        SAN FRANCISCO AI CONFERENCE!
      </p>
      <div className="ml-10 -mt-8">
        <p className="">
          Join us for an extraordinary event at the forefront of artificial intelligence innovation
        </p>
        <p className="flex items-center text-purple-800">
          <img className="w-20 mr-2" src="speakers.png" alt="speaker" />
          Skilled Speakers↗
        </p>
      </div>
      <Timer />
      <div className="mt-2  md:mt-0 ml-10">
        <div className="flex flex-row md:flex-row items-center">
          <button className="rounded-full md:-mt-8 p-2 bg-gradient-to-r from-red-600 to to-blue-700 md:ml-0 md:mr-6 text-white w-40 mb-3 md:mb-0">
            ↗ Buy Tickets
          </button>
          <button className="rounded-full md:-mt-8 p-2 bg-white text-black  md:ml-0 md:mr-6 w-40 mb-3 md:mb-0">
            
            ↗ Read More
          </button>
        </div>
        <div className="mt-5  md:mt-5 rounded-full p-2 pl-2 bg-white inline-block">
          Join us at 7th San Francisco AI Conference! July 5-9 2024
          <button className="rounded-full p-2 bg-purple-700 ml-3 md:ml-10 text-white w-40">
            ↗ Register Now
          </button>
        </div>
      </div>
      </div>
      <Footer/>
    </main>
  );
};

export default MainContent;
