import React, { useState, useEffect } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';


export default function TimerProgressVisual({ time }) {
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
  }, [countdown]);
    const progress = Math.max(0, Math.min(100, (countdown / time) * 100));
  console.log("TimerProgressVisual", progress, time);
  return (
    <Container style={{marginRight: "1rem", marginLeft: "1rem"
        
    }}>
      <ProgressBar now={progress} label={`${progress}%`} style={{ margin: '1rem ' }} />
    </Container>
  );
}