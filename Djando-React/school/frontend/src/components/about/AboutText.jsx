import React from 'react';
import './aboutText.css'

export default function Welcome(props){
    console.log(props)
    return(<div className= "aboutText"><h1>{props.name}אודות בית הספר -</h1></div>)
}

