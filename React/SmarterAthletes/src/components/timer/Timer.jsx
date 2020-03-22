import React, { useState, useEffect } from 'react';
import './timer.css'



export default function Timer() {
  const [timer, setTimer] = useState(5);
  const timerDiv = document.querySelector('.timer');
   
  useEffect(() => {
    if (timer === 0){
       timerDiv.style.display = 'none';}
             // run function Random

    if (timer === -15){
    }       // run function RegulAr

    if (timer === -19){
            // back to frist screen

    } 
    

    const currentTimer = timer;
    setTimeout(() => {
        if (timer !== currentTimer) return ;
        setTimer(currentTimer - 1);
    }, 1000)
}, [timer]);


  return (
    <div className="timerClass">
    <div className="timer">{timer}</div>
    <div className="background"></div>

    </div>
  );
}



