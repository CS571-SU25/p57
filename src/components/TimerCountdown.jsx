import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function TimerCountdown({ time, onComplete }) {
  const [countdown, setCountdown] = useState(time);
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onComplete();
    }
  }, [countdown, onComplete]);
  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>Time remaining: {countdown} seconds</p>
      <Button onClick={onComplete}>
        Complete
      </Button>
    </div>
  );
}