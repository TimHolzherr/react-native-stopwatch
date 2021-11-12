import {useCallback, useEffect, useRef, useState} from 'react';

const formatTime = (time: number): string => {
  const leadingZero = (num: number) => (num < 10 ? `0${num}` : num);
  const minutes = leadingZero(Math.floor(time / 60000) % 100);
  const seconds = leadingZero(Math.floor(time / 1000) % 60);
  const miliseconds = leadingZero(Math.floor(time / 10) % 100);

  return `${minutes}:${seconds}:${miliseconds}`;
};

export const useStopwatch = (
  updateTime: (a: string) => void,
  updateLap: (a: string) => void,
) => {
  const updateTimeRef = useRef(updateTime);
  const updateLapRef = useRef(updateLap);
  const intervalRef = useRef<number>();
  const startTimeRef = useRef<number>(0);
  const lastLapTimeRef = useRef<number>(0);

  useEffect(() => {
    updateTimeRef.current = updateTime;
    updateLapRef.current = updateLap;
  }, [updateTime, updateLap]);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<string[]>([]);

  useEffect(() => {
    updateTimeRef.current(formatTime(time));
    updateLapRef.current(formatTime(time - lastLapTimeRef.current));
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
    const currentTime = Date.now() - startTimeRef.current;
    const lapTime = currentTime - lastLapTimeRef.current;
    setLaps(lap => [...lap, formatTime(lapTime)]);
    lastLapTimeRef.current = currentTime;
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
