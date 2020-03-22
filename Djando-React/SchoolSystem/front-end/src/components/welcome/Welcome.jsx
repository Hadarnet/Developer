import React from 'react';
import './Welcome.css'

export default function Welcome(props){
    return(<div className= "welcome"><h1>{props.name} -ברוך הבא ל</h1></div>)
}