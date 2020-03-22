import React,{useState,useEffect} from 'react';
import './teacherlist.css';
import Search from "../search/Search";
import {Link,withRouter} from 'react-router-dom';


const TeacherList = () => {
  const [data,setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
 const [query,setQuery] = useState("");

 useEffect(()=> {
   const fetchData = async () => {
    console.log("hello")
    const response = await fetch("/api/teacher/")
    const jsonResponse = await response.json();
    setData(jsonResponse)
    setFilteredData(jsonResponse)
    console.log(data);

   }
   fetchData()
   
   
 
 },[])

 useEffect(()=> {
  setFilteredData( [...data].filter(item => {
    return item.first_name.includes(query)
  }))

 },[query])



const handleClick = (id,item) => {
  fetch('http://localhost:8000/api/teacher/' + id + '/', {
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
    <div className="mainTeacher">
      <Search handleChange={handleChange}></Search>
      <div className="listTeacher">
        {
          filteredData.map(Teacher => {
            return (
              <div className="itemTeacher" key={Teacher.id}>
      <Link to={{ pathname: `/teacher/${Teacher.id}`, state: { item:Teacher} }}><div className="nameTeacher">{Teacher.first_name} {Teacher.last_name}</div>
      </Link>
      
                <div className="avatar"><img src={Teacher.image} alt={Teacher.first_name}/> </div>
              </div>

            )})
          }
      </div>
    </div>
  );
}

export default withRouter(TeacherList);

