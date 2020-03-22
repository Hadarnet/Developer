import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './mainadmin.css'
import Welcome from "../welcome/Welcome";
import UserBar from "../userbar/UserBar";


export default function adminmain() {

    return(<div className="adminmain">

                 <Search/>
                 <UserBar/>


            </div>)
   }
