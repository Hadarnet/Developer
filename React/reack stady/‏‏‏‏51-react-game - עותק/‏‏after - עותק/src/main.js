import React from 'react';
import ReactDOM from 'react-dom';
import Color from './Color';
import {useState,useEffect} from 'react'


const App = () => {
  const [color, setColor] = useState(null);
  const [show, setShow] = useState(null)




  
  function handleChange(e) {
    setColor(Number(e.target.value))
    console.log(color);    
   
}
  return (
    <div>
      <Color color={handleChange} />
    </div>
  );
};



// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);

