import React from 'react';

import './App.css';
import Detail from './Components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Panel from './Components/Panel'

function App() {

  return (
      <Router>
        <div className="App">
          <div className="itemList">
            <Panel></Panel>
          </div>
          <Switch>
          <Route path="/:itemId">
            <Detail className="itemDetail"/>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
  

export default App;
