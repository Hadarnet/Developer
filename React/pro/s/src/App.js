import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Admin from './components/admin/Admin'
import About from './components/about/About'
import Messages from './components/messages/Messages'
import Employee from './components/employee/Employee'




function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
        <Route path="/" exact strict render={
          () => {
            return (<Home/>);
          }
        } />
    
        <Route path="/admin" exact strict render={
          () => {
            return (<Admin/>);
          }
        } />

<Route path="/about" exact strict render={
          () => {
            return (<About/>);
          }
        } />

<Route path="/messages" exact strict render={
          () => {
            return (<Messages/>);
          }
        } />
<Route path="/employee" exact strict render={
          () => {
            return (<Employee/>);
          }
        } />


</div>


    </Router>

  );
}

export default App;
