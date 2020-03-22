import React from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";




function App() {
  return (
  <Router>
    <div>
      <Header />
      <Container />
    </div>
  </Router>

  );
}

render(<App />, document.getElementById("root"));
