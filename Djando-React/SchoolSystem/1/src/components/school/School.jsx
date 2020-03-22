
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Route from "react-router-dom/Route";
import SchoolList from "./SchoolList";
import Form from "./Form";
import './school.css'
import ShowSchool from '../showSchool/ShowSchool'

const School = () => (
    <div className="school">
    <Router>
        <div className="container">
            <div className="rigth">
                <div className="tab1"><a>בתי ספר</a></div>
                <Route exact path="/school"component={SchoolList}/>
                <Route path="/school/:id" component={ShowSchool}/>

            </div>
            <div className="left">
            <div className="tab2"><a>הוסף בית ספר חדש</a></div>

<Form></Form>
            </div>
        </div>
    </Router>
    </div>

);

export default School;




