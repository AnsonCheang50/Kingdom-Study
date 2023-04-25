import { useRef, useState } from 'react';

const Stopwatch = () => {
  const timerRef = useRef(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // new state variable to track if the timer is running

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 10);
    }, 10);
    setIsRunning(true); // set isRunning to true when the timer starts
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false); // set isRunning to false when the timer stops
  };

  const resetTimer = () => {
    setElapsedTime(0);
    setIsRunning(false); // set isRunning to false when the timer is reset
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <button onClick={startTimer} disabled={isRunning}>Start</button> {/* disable the Start button if the timer is running */}
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;
