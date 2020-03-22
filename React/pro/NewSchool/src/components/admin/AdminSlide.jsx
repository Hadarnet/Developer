import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { HashRouter } from 'react-router-dom'


   export default function AdminSlide (){
       const adminIcons = [
        {
            iconUrl: "./img/bookkeeping.svg",
            title: "הנהלת חשבונות",
            url:"./bookkeeping"

           }, 
           
        {
            iconUrl: "./img/Employee.svg",
            title: "אנשי סגל",
            url:"./employee"
            
           }, 
        {
            iconUrl: "./img/books.svg",
            title: "מורים",
            url:"./teachers"

        },
        {
            iconUrl: './img/Claas.svg',
            title: "כיתות ",
            url:"./claas"

           },
           {
            iconUrl: "./img/Subjcet.svg",
            title: "מקצועות ",
            url:"./profession"

           },
           { 
            iconUrl: "./img/assimint.svg",
            title: "נושאים",
            url:"./subjcet"
            
           },
           {
            iconUrl: "./img/student.svg",
            title: "קבוצות לימוד ",
            url:"./groupstady"

           },
           {
            iconUrl: "./img/student.svg",
            title: "תלמידים ",
            url:"/admin/student"

           },
           {
            iconUrl: "./img/parents.svg",
            title: "הורים",
            url:"./parents"

           },
           {
            iconUrl: "../../img/login.svg",
            title: "מערכת שעות ",
            url:"./schedule"

            
           },
           {
            iconUrl: "../../img/upload.svg",
            title: "ספרים וודיאו",
            url:"./studyMaterial"
            

           },
           {
            iconUrl: "../../img/exam.svg",
            title: "מבחנים ",
            url:"./exam"


           },
           {
            iconUrl: "../../img/result.svg",
            title: "ציונים ",
            url:"./result"

           },
           {
            iconUrl: "../../img/certificate.svg",
            title: "תעודות ",
            url:"./certificate"

           },
           {
            iconUrl: "../../img/event.svg",
            title: "אירועים ",
            url:"./event"

           },
           {
            iconUrl: "./img/messages.svg",
            title: "הודעות ",
            url:"./messages"

           },
           {
            iconUrl: "./img/visitor.svg",
            title: "מבקרים",
            url:"./visitor"

           },
           {
            iconUrl: "/img/report.svg",
            title: "דוחות ",
            url:"./report"

           },
           {
            iconUrl: "/img/gallery.svg",
            title: "דוחות ",
            url:"./gallery"

           },
       ]
    return(
        <div className="adminNav">
       {
        adminIcons.map(adminIcons => {
            return (

                
            <div className="adminFlex">
                 <div className="adminIcon" ><img src={adminIcons.iconUrl} alt={adminIcons.title} /></div>
                 <HashRouter basename="/admin"/>

                 <div className="adminLink"><Link to={adminIcons.url}>{adminIcons.title}</Link></div>
            </div>
            )
        })
        
       }
       
       </div>
)}

