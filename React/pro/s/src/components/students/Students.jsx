import React from 'react';
import ReactDOM from 'react-dom'

export default class Students extends React.Component {
      state = {
        from: [{  
        idSchool:'',                 // סמל מוסד
        school:'',                   // בית הספר
        yearStudies:'',              // שנת לימוד 
        idNumber:'',                 // מספר זהות
        identity:'',                 // זהות
        firstName: '',               // שם פרטי          
        lastName: '',                // שם משפחה
        dateOfBirth:'',              // תאריך לידיה
        genderCode:'',               // קוד מין
        gender:'',                   // מין
        grade:'',                    //שכבה
        parallel:'',                 //מקבליה
        registrationStartDate:'',    //תאריך תחילת רישום
        registrationEndDate:'',      //תאריך סיום רישום
        numberPassport:'',           //מספר דרכון
        ppassportGroup:'',           //קבוצת דרכון
        countryBirthCode:'',         //קוד ארץ לידה
        countryBirth:'',             // ארץ לידה
        countryOrigin:'',            // ארץ עליה
        countryOriginCode:'',        //קוד ארץ עליה
        dateImmigration:'',          //תאריך עליה
        nationalCode:'',             //לאום
        idOfficeCurriculum:'',       //קוד מגמה משרד החינוך
        idSchoolCurriculum:'',       //קוד מגמה בית הספר
        pathCode:'',                 //קוד נתיב
        routeCode:'',                //קוד מסלול
        certificationCode:'',        //קוד הסמכה
        proprietyScheduling:'',      // תקינות שיבוץ
        notReportingGravestones:'',  // לא לדיווח מצבת
        dSepartureDate:'',           // תאריך עזיבה
        tuitionEligibilityCode:'',   // קוד זכאות לשכר לימוד
        numberiblingsUpToAge18:'',   // מספר אחים עד גיל 18
        previousIdentityNumber:'',   // מספר זהות קודמת
        previousIdentityType:'',     // סוג זהות קודמת
        }],

    
      }
         
  

         render() {
          let {from} = this.state
          return (      
          <form>
            
            {
              from.map((idx)=> {
                console.log('test')
                let idSchool = `idSchool-${idx}`, yearStudies = `school-${idx}`
                return (
                  <div key={idx}>
                  <label htmlFor={idSchool}>סמל מוסד</label>
                    <input
                      type="text"
                      name={idSchool}
                      data-id={idx}
                      id={idSchool}
                      className="idSchool"
                    />
                    <label htmlFor={yearStudies}>שנת לימוד</label>
                    <input
                      type="text"
                      name={yearStudies}
                      data-id={idx}
                      id={yearStudies}
                      className="age"
                    />
                  </div>
                )
              })
            }
            <input type="submit" value="הוסף" /> 
          </form>
        )
      }
    }
    
      
      