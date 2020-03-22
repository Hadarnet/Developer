import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import { BrowserRouter as Router} from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function Home() {
  const [color, setColor] = useState();
  const [scolor, setsColor] = useState();

  const [timer, setTimer] = useState(5);
  const timerDiv = document.querySelector('.timer');
  const backgroundDiv = document.querySelector("#background");
  const circlePicker = document.querySelector('.circlePicker');

  let i = 0;

  useEffect(() => {

    if (timer === 0) {
              changeBG()
    }

    if (timer === -15){
    }  
    if (timer === -19){
    } 
    
    const currentTimer = timer;
    setTimeout(() => {
        if (timer !== currentTimer) return ;
        setTimer(currentTimer - 1);
    }, 1000)
}, [timer]);

const changeBG = () => {
  let rand = Math.floor(Math.random() * Math.floor(2));
  if (rand === 0) {
    backgroundDiv.style.backgroundColor = setColor;
  } else {
    backgroundDiv.style.backgroundColor = color;
  }
};

  
  return (
    <div className="continer">

         <div className="circlePicker">
        <h1>התאמן איתי בחר שנים צבעים</h1>
         <CirclePicker 
           color={color}
           onChangeComplete={Color => {
             setColor(Color.hex);
             console.log(Color.hex)}}
         />
            <Link to='timer/'>
   <button type="button" className="btn btn-info">התחל</button>
   
   </Link>

       </div>

<div className="timer">{timer}</div>


       <div id="background"></div>
       </div>

     );
   }
   
   

  

  


  

