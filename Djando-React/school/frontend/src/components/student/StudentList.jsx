import React,{useState,useEffect} from 'react';
import './studentlist.css';
import Search from "../search/Search";
import {Link,withRouter} from 'react-router-dom';


const StudentList = () => {
  const [data,setData] = useState([]);
  const [filteredData,setFilteredData] = useState([]);
 const [query,setQuery] = useState("");

 useEffect(()=> {
   const fetchData = async () => {
    console.log("hello")
    const response = await fetch("/api/student/")
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
  fetch('http://localhost:8000/api/student/' + id + '/', {
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
      <div className="studentList">
        <Search handleChange={handleChange}></Search>
        <div className="mainStudent">
          {
            filteredData.map(Student => {
              return (
                <div className="itemStudent" key={Student.id}>
{/* 
        <Link to={`student/${Student.id}`}params={{ item: Student }}>Link</Link> */}
        <Link to={{ pathname: `/student/${Student.id}`, state: { item:Student} }}>    
        <div className="itemName">                
        <div>שם: {Student.first_name} {Student.last_name}</div>
        </div>
</Link>

                  <div className="avatar"><img src={Student.image} alt={Student.title}/> </div>
                  <button onClick={() => { handleClick(Student.id,Student) }} className="delete-btn">🗑מחק</button>

                </div>

              )})
            }
        </div>
      </div>
    );
}

export default withRouter(StudentList);

