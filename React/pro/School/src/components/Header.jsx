
import React from 'react';
import { Link } from "react-router-dom";


   export default function header(){
       const links = [
           {
               title: "בית",
               url: "www.dgdggd.com"
           },
           {
               title: "אודות",
               url: "www.google.com"

           },
           {
               title: "דבר המנהל",
               url: "www.google.com"

           },
           {
               title: "אנשי סגל",
               url: "www.google.com"

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
        links.map(link => {
            return (
            <div className="navText"><link to={link.url}>{link.title}</link></div>
            )
        })
       }
       </div>
       </div>
)}