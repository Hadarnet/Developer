
import React from 'react';
import './Admin.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import AdminSlide from './AdminSlide'
import Students from '../students/Students'
import { HashRouter } from 'react-router-dom'
import Class from '../class/Class';



function Admin() {
  
  return (
    <Router>
    
      <div className="admin">
       <HashRouter basename="/admin"/>
       <Route path="/admin/student" exact strict render={
          () => {
            return (<Class/>);
          }
          
        } />

<Route path="/admin/class" exact strict render={
          () => {
            return (<Class/>);
          }
          
        } />

<AdminSlide/>



</div>


    </Router>


  );
}

export default Admin;




