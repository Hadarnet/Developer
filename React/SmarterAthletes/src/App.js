import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/home/Home'
import Timer from './components/timer/Timer'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/timer" component={Timer}/>




      </div>
    </Router>

  );
}
export default App;
