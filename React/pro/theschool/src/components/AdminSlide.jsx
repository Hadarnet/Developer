import React from 'react';


   export default function navAdmin (){
       const adminIcons = [
        {
            urlicon: "./img/bookkeeping.svg",
            title: "הנהלת חשבונות",
            url:"what"

           }, 
           
        {
            urlicon: "./img/employee.svg",
            title: "אנשי סגל",
            url:"what"

           }, 
        {
            urlicon: "./img/books.svg",
            title: "מורים",
            url:"what"

           },
           {
            urlicon: "./img/Claas.svg",
            title: "כיתות ",
            msg:"what"

           },
           {
            urlicon: "./img/Subjcet.svg",
            title: "מקצועות ",
            msg:"what"

           },
           {
            urlicon: "./img/assimint.svg",
            title: "נושאים",
            msg:"what"

           },
           {
            urlicon: "./img/student.svg",
            title: "קבוצות לימוד ",
            msg:"what"

           },
           {
            urlicon: "./img/student.svg",
            title: "תלמידים ",
            msg:"what"

           },
           {
            urlicon: "./img/parents.svg",
            title: "הורים",
            msg:"what"

           },
           {
            urlicon: "./img/login.svg",
            title: "מערכת שעות ",
            msg:"what"

           },
           {
            urlicon: "./img/upload.svg",
            title: "ספרים וודיאו",
            msg:"what"

           },
           {
            urlicon: "./img/exam.svg",
            title: "מבחנים ",
            msg:"what"

           },
           {
            urlicon: "./img/result.svg",
            title: "ציונים ",
            msg:"what"

           },
           {
            urlicon: "./img/certificate.svg",
            title: "תעודות ",
            msg:"what"

           },
           {
            urlicon: "./img/event.svg",
            title: "אירועים ",
            msg:"what"

           },
           {
            urlicon: "./img/messages.svg",
            title: "הודעות ",
            msg:"what"

           },
           {
            urlicon: "./img/visitor.svg",
            title: "מבקרים",
            msg:"what"

           },
           {
            urlicon: "./img/report.svg",
            title: "דוחות ",
            msg:"what"

           },
           {
            urlicon: "./img/gallery.svg",
            title: "גלריה ",
            msg:"what"

           }
       ]
    return(
        <div className="adminNav">
       {
        adminIcons.map(adminIcons => {
            return (

                
            <div className="adminFlex">
                 <div className="adminIcon" ><img src={adminIcons.urlicon} alt={adminIcons.title} /></div>
                 <div className="adminText"><a href={adminIcons.url}>{adminIcons.title}</a></div>
            </div>
            )
        })
        
       }
       
       </div>
)}

