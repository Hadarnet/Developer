
import React from 'react';
import './footer.css';


   export default function footer(){
       const links = [
           {
               title: "כל הזכיות שמורות ל",
               url: "https://www.hadarnet.com"
           },
    
       ]
  
       
    return(
        <div className="footer">
       {
        links.map(mlink => {
            return (
            <div className="footerText"><a href={mlink.url}>HadarNET  -</a>{mlink.title}</div>
            )
        })
       }
       </div>

)}