import React from 'react';
import ReactDOM from 'react-dom';
import From from './from';
import {useState} from 'react'

const App = () => {
  const [text, setText] = useState(1);
  function handleChange(e) {
    setText(e.target.value)
    
    // const newValute = e.target.value;
    // setText(newValute);
  }
  return (
    <div>
      <From text={handleChange} message={text}/>
      <From text={handleChange} message={text}/>
      <From text={handleChange} message={text}/>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

 