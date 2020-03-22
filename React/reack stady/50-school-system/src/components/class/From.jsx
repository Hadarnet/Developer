import React from 'react';
import './Class.css';
import ReactDOM from 'react-dom'

export default class Class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        idSchool:'',                 // סמל בית ספר
        nameSchool:'',               // שם בית הספר
        yearStudies:'',              // שנת לימוד 
        grade:'',                    //שכבה
        parallel:'',                 //מקבליה
        classType:'',                //סוג כיתה
        descripClassType:'',         //תיאור סוג כיתה
        minStudents:'',              //מינמום תלמידים
        maxStudents:'',              //מקסימום תלמידים
        approvalStatus:'',           //סטוס אישור
        descripApprovalStatus:'',    //תיאור סטוס אישור

      }
         };
  
  
  
    render() {
      return (
        <input
        required
        type="text"
        onChange={event => this.handleInput(event, 'firstName')}
      />
      );
    }
  }
