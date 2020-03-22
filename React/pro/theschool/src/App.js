import React from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route, Link } from 'react-router-dom'

import './app.css'

const Dynamic = () => <div>This is a dynamic route!</div>

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
    </Root>
    <div className="content">
        <Switch>
          <Route path="/dynamic" component={Dynamic} />
          <Route render={() => <Routes />} />
        </Switch>
      </div>

  )
}
