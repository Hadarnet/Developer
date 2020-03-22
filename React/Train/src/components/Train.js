import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Train = props => {
  const data = useLocation();
  const fColor = data.state.firstColor;
  const sColor = data.state.secondColor;

  const [bg, setBg] = useState("white");

  const [timerBefore, setTimerBefore] = useState(5);
  const [timerAfter, setTimerAfter] = useState(15);

  useEffect(() => {
    if (timerBefore === 0) return;
    const currentTimer = timerBefore;
    setTimeout(() => {
      if (timerBefore !== currentTimer) return;
      setTimerBefore(currentTimer - 1);
    }, 1000);
  }, [timerBefore]);

  useEffect(() => {
    if (timerAfter === 0) return;
    const currentTimer = timerAfter;
    setTimeout(() => {
      if (timerAfter !== currentTimer) return;
      setTimerAfter(currentTimer - 1);
    }, 1000);
    if (timerAfter < 11) {
      changeBG();
    }
    
  }, [timerAfter]);

  const changeBG = () => {
    let rand = Math.floor(Math.random() * Math.floor(2));
    if (rand === 0) {
      setBg(fColor);
    } else {
      setBg(sColor);
    }
  };

  let style = { backgroundColor: bg, width: 100 + "%", height: 90 + "%" };
  return (
    <>
      {timerBefore > 0 && <h1>{timerBefore}</h1>}
      {timerAfter < 11 && <h2>{timerAfter}</h2>}
      <div style={style}></div>
      {timerAfter == 0 && (
        <button>
          <Link to="/">Start Again!!!</Link>
        </button>
      )}
    </>
  );
};

export default Train;
