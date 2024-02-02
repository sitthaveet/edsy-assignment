import { useTimer } from 'react-timer-hook'
import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeOut, onExamFinish }) => {

    // initialize the timer with 5 minutes
    const [expiryTimestamp] = useState(Date.now() + 300000);
  
    // use the custom hook to get the timer state and functions
    const {
      seconds,
      minutes,
      start,
      pause,
    } = useTimer({ expiryTimestamp, onExpire: onTimeOut });
  
    // ยังไม่ได้ใช้ แปะเก็บไว้ก่อน จริงๆต้องหยุด timer หลังกด submit ข้อสอบ
    const handleExamFinish = () => {
      pause();
      onExamFinish();
    };

    // start the timer when the component mounts
    useEffect(() => {
        start();
        }, []);
    
    // render the timer
    return (
        <div className="badge badge-accent text-secondary text-right mr-7 p-3">⏰ Time remaining: {minutes}:{seconds}</div>
    );
};


export default Timer;
