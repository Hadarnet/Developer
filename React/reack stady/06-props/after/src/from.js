import React from 'react';

export default function From(props) {
  

  return (
    <div>
      {/* <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} />
      <input type="text" value={text} onChange={handleChange} /> */}
      <input type="text" value={props.message} onChange={props.text} />
    </div>
  );
}