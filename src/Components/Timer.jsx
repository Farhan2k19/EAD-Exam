import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div>
      {countdown === 0 ? (
        <h2>Time's Up!</h2>
      ) : (
        <h2>Countdown: {countdown}</h2>
      )}
    </div>
  );
};

export default Timer;
