import React from 'react';
import './Students.css';
import ReactDOM from 'react-dom'

export default class School extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        idSchool:'',                 // סמל בית ספר
        nameSchool:'',               // שם בית הספר
        yearStudies:'',              // שנת לימוד 
        schoolNetwork:'',            // רשת חינוך
        descripSchoolNetwork:'',     // תיאור רשת חינוך 
        schoolTyple:'',              // סוג בית ספר
        descripschoolTyple:'',       // תיאור סוג בית ספר 
        inspector:'',                // גורם מפקח 
        descripInspector:'',         // תיאור גורם בית ספר 
        sector:'',                   // מגזר 
        descripSector:'',            // תיאור מגזר
        legalStatus:'',              // סטוס משפטי
        descripLegalStatus:'',       // תיאור סטוס משפטי
        inspectionType :'',          // סוג פיקוח
        descripInspectionType:'',    // תיאור סוג פיקוח
        typeEducation:'',            // סוג חינוך
        descripTypeEducation:'',     // תיאור סוג חינוך
        educationPhase:'',           // שלב חינוך
        descripEducationPhase:'',    // תיאור שלב חינוך
        idCity:'',                   // קוד ישוב
        city:'',                     // ישוב
        addressSchool:'',            // כתובת
        phone:'',                    // טלפון

        

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
