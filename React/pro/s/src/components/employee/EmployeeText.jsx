import React from 'react';
import './EmployeeText.css'

export default function Welcome(props){
    return(<div className= "welcome"><h1>{props.name} -ברוך הבא ל</h1></div>)
}