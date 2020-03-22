import React from 'react';
import './search.css'



const Search = (props) => {
  return (
    <div className="search">
      <form>
            <input type="text" placeholder="חפש" onChange={props.handleChange}/>
      </form>
    </div>
  );

}
export default Search;