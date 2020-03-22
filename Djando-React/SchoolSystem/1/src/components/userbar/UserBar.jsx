import React from 'react';
import './userbar.css';


   export default function UserBar(){
       const icons = [
           {
            urlicon: "../../static/img/books.svg",
            title: "ספריה",
            url:"./book"

           },
           
           {
            urlicon: "../../static/img/assimint.svg",
            title: "הגשת מטלות ",
            url:"what"

           },
           {
            urlicon: "../../static/img/check.svg",
            title: "רישום נוכחות ",
            url:"./book"

           },
           {
            urlicon: "../../static/img/login.svg",
            title: "התחברות ",
            url:"./login"

           }
       ]
    return(
        <div className="iconClas">
       {
        icons.map(icon => {
            return (

                
            <div className="MainIcon">
                 <div className="MainIconImage"><img  src={process.env.PUBLIC_URL + icon.urlicon } alt={icon.title} /></div>

                 <div className="MainIconText"><a href={icon.url}  >{icon.title}</a></div>
            </div>
            )
        })
       }
       </div>
)}