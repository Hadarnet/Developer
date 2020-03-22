import React,{useState,useEffect} from 'react';
import './schoolList.css';
import Search from "../search/Search";
import {Link,withRouter} from 'react-router-dom';


const SchoolList = () => {
  const [data,setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
 const [query,setQuery] = useState("");

 useEffect(()=> {
   const fetchData = async () => {
    console.log("hello")
    const response = await fetch("/api/school/")
    const jsonResponse = await response.json();
    setData(jsonResponse)
    setFilteredData(jsonResponse)
    console.log(data);

   }
   fetchData()
   
   
 
 },[])

 useEffect(()=> {
  setFilteredData( [...data].filter(item => {
    return item.name.includes(query)
  }))

 },[query])



const handleClick = (id,item) => {
  fetch('http://localhost:8000/api/school/' + id + '/', {
    method: 'DELETE'
  })
    .then(res => console.log(res))
    .catch(error => console.error('Error:', error));
    setFilteredData(filteredData.filter(x => {
      return item !== x;
    }))
   }
  
  const handleChange = (e) => {

    
    setQuery(e.target.value)
   
  }




    return (
      <div className="mainSchool">
        <Search handleChange={handleChange}></Search>
        <div className="listSchool">
          {
            filteredData.map(School => {
              return (
                <div className="itemSchool" key={School.id}>
        <Link to={{ pathname: `/school/${School.id}`, state: { item:School} }}><div>{School.name}</div>
        </Link>
        
                  <div className="avatar"><img src={School.image} alt={School.name}/> </div>
                </div>

              )})
            }
        </div>
      </div>
    );
}

export default withRouter(SchoolList);

