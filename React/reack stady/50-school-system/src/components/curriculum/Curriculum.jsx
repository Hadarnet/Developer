import React from 'react';
import './Curriculum.css';
import ReactDOM from 'react-dom'

export default class Curriculum extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        idSchool:'',                 // סמל בית ספר
        nameSchool:'',               // שם בית הספר
        yearStudies:'',              // שנת לימוד 
        idOfficeCurriculum:'',       //קוד מגמה משרד החינוך
        descripOfficeCurriculum:'',  //תיאור מגמה משרד החינוך
        idSchoolCurriculum:'',       //קוד מגמה בית הספר
        descripSchoolCurriculum:'',  //תיאור מגמה בית הספר
        NamechoolCurriculum:'',      //קוד מגמה בית הספר
        grade:'',                    //שכבה
        parallel:'',                 //מקבליה
        requiredStudent:'',          //מספר סטודנטים מבוקש
        scheduling:'',               //שיבוץ
        StatusCurriculum:'',         //סטוסט אישור מגמה
        descripStatusCurriculum:'',  //תיאור סטוסט אישור מגמה
        dateStatusCurriculum:'',     //תאריך סטוסט אישור מגמה
        approvedStudents:'',         //מכסת תלמידים מאושרת
        NoteApprovalStatus:'',       //הערה סטוסט אישור מגמה

      }
         };
  
  
  
    render() {
      return (
        this.state.data.map(function(item, i){
          console.log('test');
          return <li key={i}>Test</li>
        })              );
    }
  }
