import React from 'react';
import ReactDOM from 'react-dom';
import From from './from';
import {useState} from 'react'
const number = Math.floor(Math.random() * 1000 + 1);

const App = () => {
  const [text, setText] = useState(null);
  const [message, setMessage] = useState(null)
  
  function handleChange(e) {
    // console.log(e.target.value);
    setText(Number(e.target.value))
    console.log(text, number);    
    if (text > number ) {
      setMessage("to high");
    } 
    else if (text < number) {
      setMessage("to low");
    }
    else {
      setMessage("you won");
    
  }
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

