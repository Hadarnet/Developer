

import React from 'react';
import './Class.css'
export default function from (){
    const classAdmin = [
     {
         type:"text",
         name:"firstname",
         value:"סמל מוסד"

        }, 
        {
          type:"text",
          name:"nameSchool",
          value:"שם בית ספר"
 
         }, 
         {
          type:"text",
          name:"yearStudies",
          value:"שנת לימוד"
 
         }, 
         {
          type:"grade",
          name:"firstname",
          value:"שכבה"
 
         }, 
         {
          type:"text",
          name:"parallel",
          value:"מקבילה"
 
         }, 
         {
          type:"text",
          name:"classType",
          value:"סוג כיתה"
 
         }, 
         {
          type:"text",
          name:"descripClassType",
          value:"תיאור סוג כיתה"
 
         }, 
         {
          type:"text",
          name:"minStudents",
          value:"מינימום תלמידים"
 
         },
         {
          type:"text",
          name:"maxStudents",
          value:"מקסימום תלמידים"
 
         },
         {
          type:"text",
          name:"approvalStatus",
          value:"סטטוס אישור"
 
         },
         {
          type:"text",
          name:"approvalStatus",
          value:"תיאור סטטוס אישור"
 
         },  
    ]
 return(
     <div className="from">
    {
     classAdmin.map(adminFrom => {
         return (
         <div className="adminClass">
              <div className="adminInput" ><input type={adminFrom.type} name={adminFrom.name} value={adminFrom.value}  /></div>
         </div>
         )
     })
     
    }
    
    </div>
)}

