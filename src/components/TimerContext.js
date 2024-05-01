// TimerContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [seconds, setSeconds] = useState(259200); // 3 days in seconds

  useEffect(() => {
    const initialTimestamp = localStorage.getItem('timerStartTimestamp');
    const now = Math.floor(Date.now() / 1000);
    const startTimestamp = initialTimestamp ? parseInt(initialTimestamp) : now;
    const elapsedTime = now - startTimestamp;
    
    const remainingSeconds = Math.max(0, 259200 - elapsedTime);

    setSeconds(remainingSeconds);

    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => Math.max(0, prevSeconds - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    localStorage.setItem('timerStartTimestamp', Math.floor(Date.now() / 1000));
  }, []);

  return (
    <TimerContext.Provider value={{ seconds }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
