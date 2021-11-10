import { useCallback, useEffect, useRef, useState } from "react";

const formatTime = (time: number): string => {
    const hours = Math.floor(time / 60 / 60);
    const minutes = Math.floor(time / 60) % 60;
    const seconds = time % 60;
    const leadingZero = (num: number) => num < 10 ? `0${num}` : num;
    return `${leadingZero(hours)}:${leadingZero(minutes)}:${leadingZero(seconds)}`;
}

export const useStopwatch = (callback: (a: string) => void) => {
    const callbackRef = useRef(callback);
    const intervalRef = useRef<number>();
    
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
        intervalRef.current = <number><unknown>setInterval(() => {//TODO: Type!            
            setTime(time => time + 1);}, 
            1000); 
    }, []);

    const reset = useCallback(() => {
        setTime(0);
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


