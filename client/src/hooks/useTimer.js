import { useState, useRef } from 'react';

const useTimer = (initialState) => {
  const [timeLeft, setTimeLeft] = useState(initialState);
  const [timerActive, setTimerActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const [disableItem, setDisableItem] = useState(false);

  const handleStart = () => {
    // start button logic here
    setTimerActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 1) {
          setDisableItem(true);
          clearInterval(countRef.current);
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    // Pause button logic here
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    // Resume button logic here
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 1) {
          setDisableItem(true);
          clearInterval(countRef.current);
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    // Reset button logic here
    clearInterval(countRef.current);
    setTimerActive(false);
    setIsPaused(false);
    setTimeLeft(initialState);
  };

  return {
    timeLeft,
    timerActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    disableItem,
  };
};

export default useTimer;
