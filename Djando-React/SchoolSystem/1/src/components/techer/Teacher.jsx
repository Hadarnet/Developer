
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/Route";
import TeacherList from "./TeacherList";
import Form from './Form'
import ShowTeacer from '../showTeacher/ShowTeacher'
import './teacher.css'


const Teacher = () => (
    <div className="teacher">
     <Router>
        <div className="container">
            <div className="rigth">
                <div className="tab1"><a>בתי ספר</a></div>
                <Route exact path="/teacher"component={TeacherList}/>
                <Route path="/teacher/:id" component={ShowTeacer}/>

            </div>
            <div className="left">
            <div className="tab2"><a>הוסף בית ספר חדש</a></div>

<Form></Form>
            </div>
        </div>
    </Router>
    </div>


);

export default Teacher;




