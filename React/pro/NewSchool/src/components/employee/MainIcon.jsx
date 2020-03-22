import React from 'react';
import './MainIcon.css';


   export default function iconClas(){
       const icons = [
           {
            urlicon: "./img/books.svg",
            title: "ספריה",
            url:"what"

           },
           
           {
            urlicon: "./img/assimint.svg",
            title: "הגשת מטלות ",
            msg:"what"

           },
           {
            urlicon: "./img/check.svg",
            title: "רישום נוכחות ",
            msg:"what"

           },
           {
            urlicon: "./img/login.svg",
            title: "התחברות ",
            msg:"what"

           }
       ]
    return(
        <div className="iconClas">
       {
        icons.map(icon => {
            return (

                
            <div className="MainIcon">
                 <div className="MainIconImage"><img  src={icon.urlicon} alt={icon.title} /></div>

                 <div className="MainIconText"><a href={icon.url}>{icon.title}</a></div>
            </div>
            )
        })
       }
       </div>
)}