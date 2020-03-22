import React from 'react';
import Admin from './Admin';
import {
    BrowserRouter as 
    Switch,
    Route,
    
  } from "react-router-dom";
  


export default function main() {
    return(<div className="main">
                <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>

    </div>)
   }