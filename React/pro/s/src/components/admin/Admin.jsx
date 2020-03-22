
import React from 'react';
import './Admin.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import AdminSlide from './AdminSlide'
import Students from '../students/Students'
import { HashRouter } from 'react-router-dom'



function Admin({history}) {
  console.log(history);
  
  return (
    <Router>
    
      <div className="admin">
       <HashRouter basename="/admin"/>
       <Route path="/admin/student" exact strict render={
          () => {
            return (<Students/>);
          }
          
        } />

<AdminSlide/>



</div>


    </Router>


  );
}

export default Admin;




