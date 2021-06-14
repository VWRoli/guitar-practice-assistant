import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../actions/items';

const useTimer = (item) => {
  const time = item.duration * 60;
  const [timeLeft, setTimeLeft] = useState(time);
  const [timerActive, setTimerActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);
  const dispatch = useDispatch();

  const handleStart = () => {
    setTimerActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 1) {
          dispatch(updateItem(item._id, { ...item, isDisabled: true }));
          clearInterval(countRef.current);
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 1) {
          dispatch(updateItem(item._id, { ...item, isDisabled: true }));
          clearInterval(countRef.current);
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimerActive(false);
    setIsPaused(false);
    setTimeLeft(time);
    dispatch(updateItem(item._id, { ...item, isDisabled: false }));
  };

  return {
    timeLeft,
    timerActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  };
};

export default useTimer;
