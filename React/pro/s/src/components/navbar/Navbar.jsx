
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  import './Navbar.css';


   export default function header(){
       const links = [
           {
               title: "בית",
               url: "./"
           },
           {
               title: "אודות",
               url: "./about"

           },
           {
               title: "דבר המנהל",
               url: "./managerthing"

           },
           {
               title: "אנשי סגל",
               url: "./employee"

           },
           {
               title: "אזור הודעות",
               url: "./messages"

           },
           {
               title: "לוח אירועים",
               url: "./event"

           },
           {
               title: "גלריה",
               url: "./gallery"

           },
           {
               title: "צור קשר",
               url: "./contactus"

           }

           ,
           {
               title: "לוח בקרה",
               url: "./admin"

           }


       ]
  
       
    return(
        <div className="navbar">
        <div className="header">
       {
        links.map(mlink => {
            return (
            <div className="navText"><Link to={mlink.url}>{mlink.title}</Link></div>
            )
        })
       }
       </div>
       </div>

)}