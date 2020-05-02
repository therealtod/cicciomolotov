import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './App.css';
import Detail from './Components/Detail';
import Data from './Mockdata/mockdata.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  var oggetti = Data.items;
  return (
    <Router>
      <div className="App">
        <div className="itemList">
          <div className="headerList"> Item List </div>
          <div className="List">
            <ListGroup>
              {
                oggetti.map(data=>{
                  return (
                    <ListGroup.Item><Link to={"/" + data.key}>{data.name}</Link></ListGroup.Item>
                  );
                })
              }
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
