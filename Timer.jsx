// src/components/Timer.jsx
import { useEffect, useRef } from 'react';

const Timer = ({ difficulty, stage, timeLeft, setTimeLeft, onTimeUp }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (stage === 'quiz') {
      const totalTime = difficulty === 'hard' ? 600 : 300;
      setTimeLeft(totalTime);

      if (timerRef.current) clearInterval(timerRef.current);

      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stage, difficulty]);

  return null;
};

export default Timer;
