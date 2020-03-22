
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/Route";
import Tabs from "./Tab";
import './student.css'
import Form from './Form'
import StudentList from './StudentList'

const Student = () => (
    <div className="student">
    <Router>
        <Tabs/>
        <Route exact path="/student"component={StudentList}/>
        <Route exact path="/student/add"component={Form}/>


    </Router>

    </div>

);

export default Student;




