
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  

   export default function header(){
       const links = [
           {
               title: "בית",
               url: "./admin"
           },
           {
               title: "אודות",
               url: "./admin"

           },
           {
               title: "דבר המנהל",
               url: "./admin"

           },
           {
               title: "אנשי סגל",
               url: "/admin"

           },
           {
               title: "אזור הודעות",
               url: "www.google.com"

           },
           {
               title: "לוח אירועים",
               url: "www.google.com"

           },
           {
               title: "גלריה",
               url: "www.google.com"

           },
           {
               title: "צור קשר",
               url: "www.google.com"

           }



       ]
  
       
    return(
        <div className="navbar">
        <div className="header">
       {
        links.map(mlink => {
            return (
            <div className="navText"><link to={mlink.url}>{mlink.title}</link></div>
            )
        })
       }
       </div>
       </div>

)}