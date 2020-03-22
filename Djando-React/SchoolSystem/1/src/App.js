import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Admin from './components/admin/Admin'
import About from './components/about/About'
import Messages from './components/messages/Messages'
import Employee from './components/employee/Employee'
import Footer from './components/footer/Footer'
import Event from './components/event/Event'
import Gallery from './components/gallery/Gallery'
import Login from "./components/login/Login";
import ShowStudent from "./components/showStudent/ShowStudent";
import ShowSchool from "./components/showSchool/ShowSchool"

function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/messages" component={Messages}/>
        <Route exact path="/employee" component={Employee}/>
        <Route exact path="/event" component={Event}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route path="/student/:id" component={ShowStudent}/>
        <Route path="/school/:id" component={ShowSchool}/>



        <Footer/>

      </div>
    </Router>

  );
}
export default App;
