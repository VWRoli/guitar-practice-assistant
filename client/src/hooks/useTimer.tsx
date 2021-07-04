import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../actions/items';
import { ItemType } from '../components/Dashboard/Sidebar/Sidebar';

type ReturnTypes = {
  timeLeft: number;
  timerActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePause: () => void;
  handleResume: () => void;
  handleReset: () => void;
};

const useTimer = (item: ItemType): ReturnTypes => {
  const time = item.duration * 60;
  const [timeLeft, setTimeLeft] = useState(time);
  const [timerActive, setTimerActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef<number>(0);
  const dispatch = useDispatch();

  const handleStart = (): void => {
    setTimerActive(true);
    setIsPaused(true);
    countRef.current = window.setInterval(() => {
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
    countRef.current = window.setInterval(() => {
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
