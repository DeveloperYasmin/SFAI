import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(259200); // 3 days in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clean up the interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once

  // Format the seconds into DD:HH:MM:SS format
  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return { days, hours, minutes, seconds };
  };

  return (
    <div className="timer ml-10 md:-mt-2 md:ml-0 bg-cover bg-center p-4 md:p-10 rounded-md text-white font-sans flex items-center md:space-x-4">
      <div className="flex items-center">
        <div className="bg-gradient-to-b w-16 md:w-20 font-bold text-3xl md:text-4xl from-purple-600 text-center to-gray-900 bg-opacity-70 p-2 rounded-md mb-2 relative">
          {formatTime(seconds).days.toString().padStart(2, '0')}
          <div className="text-xs md:text-sm font-normal text-center">Days</div>
        </div>
      </div>
      <p className="p-2 md:p-0 text-black font-bold">:</p>
      <div className="flex items-center">
        <div className="bg-gradient-to-b w-16 md:w-20 font-bold text-3xl md:text-4xl from-purple-600 text-center to-gray-900 bg-opacity-70 p-2 rounded-md mb-2 relative">
          {formatTime(seconds).hours.toString().padStart(2, '0')}
          <div className="text-xs md:text-sm font-normal text-center">Hours</div>
        </div>
      </div>
      <p className="p-2 md:p-0 text-black font-bold">:</p>
      <div className="flex items-center">
        <div className="bg-gradient-to-b w-16 md:w-20 font-bold text-3xl md:text-4xl from-purple-600 text-center to-gray-900 bg-opacity-70 p-2 rounded-md mb-2 relative">
          {formatTime(seconds).minutes.toString().padStart(2, '0')}
          <div className="text-xs md:text-sm font-normal text-center">Minutes</div>
        </div>
      </div>
      <p className="p-2 md:p-0  text-black font-bold">:</p>
      <div className="flex items-center">
        <div className="bg-gradient-to-b w-16 md:w-20 font-bold text-3xl md:text-4xl from-purple-600 text-center to-gray-900 bg-opacity-70 p-2 rounded-md mb-2 relative">
          {formatTime(seconds).seconds.toString().padStart(2, '0')}
          <div className="text-xs md:text-sm font-normal text-center">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;