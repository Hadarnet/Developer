
import React from 'react';
import './Admin.css';
import { BrowserRouter as Router} from 'react-router-dom'
import AdminSlide from '../adminslide/AdminSlide'
import Route from "react-router-dom/Route";
import School from "../school/School";
import Teacher from '../techer/Teacher'
import Klas from "../klas/Klas";
import Gallery from "../gallery/Gallery";
import Course from "../course/Course";
import Book from "../book/Book";
import Student from "../student/Student";

const Admin = () => (
    <div className="admin">
    <Router>
            <div className="mainAdmin">

        <Route exact path="/school"component={School}/>
        <Route exact path="/teacher"component={Teacher}/>
        <Route exact path="/student"component={Student}/>
        <Route exact path="/class"component={Klas}/>
        <Route exact path="/course"component={Course}/>
        <Route exact path="/studyMaterial"component={Book}/>

        <Route exact path="admin/gallery"component={Gallery}/>


            </div>

    <AdminSlide/>

    </Router>

    </div>

);

export default Admin;




