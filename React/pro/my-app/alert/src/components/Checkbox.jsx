import React from "react";
import Check from "./Check";

export default function ChechBox(props) {
    console.log(props)
  return (
    <div>
      <input type="checkbox" onChange={() => props.ischecked1()}></input>
      {props.open ? <Check></Check> : null}
    </div>
  );
}