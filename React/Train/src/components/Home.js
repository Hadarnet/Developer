import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css'
const Home = props => {
  const colors = ["blue", "green", "yellow", "red" , "black","orange"];
  const [count, setCount] = useState(0);
  const [fColor, setFColor] = useState(null);
  const [sColor, setSColor] = useState(null);

  const getColors = color => {
    if (count == 0) {
      setFColor(color);
    } else if (count == 1) {
      setSColor(color);
    }
    setCount(count + 1);
  };

  return (
    <>
         <div class name ="text"><h1>Let's Train Together </h1><h2>Choose two colors</h2></div>

      <div
        className="color-container">
        <div>
          <div className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[0] }}
            value={colors[0]}> 
          </div>
          <div
            className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[1] }}
            value={colors[1]}>
          </div>
          <div className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[2] }}
            value={colors[2]}>
           </div>

        </div>
        <div>
          <div
            className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[3] }}
            value={colors[3]}>
         </div>
          <div
            className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[4] }}
            value={colors[4]}>
           </div>
           <div
            className="box-color" onClick={e => {getColors(e.target.style.backgroundColor);}}
            style={{ background: colors[5] }}
            value={colors[5]}>
           </div>

        </div>
        
      </div >
      <div className="textColor">
      <p>{fColor}</p>
      <p>{sColor}</p>
      </div>
      {count > 1 && (
        <button>
          <Link to={{pathname: "/train",state: {firstColor: fColor,secondColor: sColor}}}> Let's Train!! </Link>
        </button>
      )}
    </>
  );
};

export default Home;
