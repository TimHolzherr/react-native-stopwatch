import {useCallback, useEffect, useRef, useState} from 'react';

const formatTime = (time: number): string => {
  const leadingZero = (num: number) => (num < 10 ? `0${num}` : num);  
  const minutes = leadingZero(Math.floor(time / 60000) % 100);
  const seconds = leadingZero(Math.floor(time / 1000) % 60);
  const miliseconds = leadingZero(Math.floor((time / 10)) % 100);

  return `${minutes}:${seconds}:${miliseconds}`;
};

export const useStopwatch = (callback: (a: string) => void) => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<number>();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    callbackRef.current(formatTime(time));
  }, [time]);

  const start = useCallback(() => {
    setRunning(true);
    startTimeRef.current = Date.now();
    intervalRef.current = <number>(<unknown>setInterval(() => {
      //TODO: Type!
      setTime(Date.now() - startTimeRef.current);
    }, 11));
  }, []);

  const reset = useCallback(() => {
    setTime(0);
    startTimeRef.current = 0;
    setRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    start();
    return reset;
  }, [start, reset]);

  return {start, reset, running};
};
