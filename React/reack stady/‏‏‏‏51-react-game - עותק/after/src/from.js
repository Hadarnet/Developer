import React from 'react';

export default function From(props) {
  

  return (
    <div>
      <input type="text"  onChange={props.text} />
    </div>
  );
}