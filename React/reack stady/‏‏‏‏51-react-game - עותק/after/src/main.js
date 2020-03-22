import React from 'react';
import ReactDOM from 'react-dom';
import From from './from';
import {useState,useEffect} from 'react'
const number = Math.floor(Math.random() * 1000 + 1);


const App = () => {
  const [text, setText] = useState(null);
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (text > number ) {
      setMessage("too high");
    } 
    else if (text < number) {
      setMessage("too low");
    }
    else {
      setMessage("you won");
    
  }
   
   
  }, [text]);





  
  function handleChange(e) {
    setText(Number(e.target.value))
    console.log(text, number);    
   
}
  return (
    <div>
      <div>
       {message}
      </div>
      <From text={handleChange}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

