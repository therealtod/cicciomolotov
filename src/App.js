import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './App.css';
import Detail from './Components/Detail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="itemList">
          <div className="headerList"> Item List </div>
          <div className="List">
            <ListGroup>
              <ListGroup.Item><Link to="/1">Item 1</Link></ListGroup.Item>
              <ListGroup.Item><Link to="/2">Item 2</Link></ListGroup.Item>
              <ListGroup.Item><Link to="/3">Item 3</Link></ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <Switch>
        <Route path="/1">
          <Detail className="itemDetail"/>
        </Route>
        <Route path="/2">
          <Detail className="itemDetail"/>
        </Route>
        <Route path="/3">
          <Detail className="itemDetail"/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
