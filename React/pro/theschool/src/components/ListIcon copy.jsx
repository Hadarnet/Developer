import React from 'react';


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

                
            <div className="navMain">
                 <div className="navMainImage"><img  src={icon.urlicon} alt={icon.title} /></div>

                 <div className="navText"><a href={icon.url}>{icon.title}</a></div>
            </div>
            )
        })
       }
       </div>
)}