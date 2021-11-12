import {useCallback, useEffect, useRef, useState} from 'react';

const formatTime = (time: number): string => {
  const leadingZero = (num: number) => (num < 10 ? `0${num}` : num);
  const minutes = leadingZero(Math.floor(time / 60000) % 100);
  const seconds = leadingZero(Math.floor(time / 1000) % 60);
  const miliseconds = leadingZero(Math.floor(time / 10) % 100);

  return `${minutes}:${seconds}:${miliseconds}`;
};

export const useStopwatch = (callback: (a: string) => void) => {
  const callbackRef = useRef(callback);
  const intervalRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const lastLapTimeRef = useRef<number>(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<string[]>([]);

  useEffect(() => {
    callbackRef.current(formatTime(time));
  }, [time]);

  const start = useCallback(() => {
    setRunning(true);
    startTimeRef.current = Date.now();
    intervalRef.current = <number>(<unknown>setInterval(() => {
      //TODO: Type!
      const time = Date.now() - startTimeRef.current;
      setTime(time);
    }, 11));
  }, []);

  const reset = useCallback(() => {
    setTime(0);
    startTimeRef.current = 0;
    setRunning(false);
    lastLapTimeRef.current = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const takeLap = useCallback(() => {
    const lapTime = Date.now() - startTimeRef.current - lastLapTimeRef.current;
    setLaps(lap => [...lap, formatTime(lapTime)]);
    lastLapTimeRef.current = time;
  }, []);

  const resetLap = useCallback(() => {
    setLaps([]);
    lastLapTimeRef.current = 0;
  }, []);

  useEffect(() => {
    return reset;
  }, [start, reset]);

  return {start, reset, takeLap, resetLap, laps, running};
};
