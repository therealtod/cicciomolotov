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
import { getUsers } from './utils/requests';

function App() {
  var oggetti = getUsers();
  
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
                    <ListGroup.Item><Link to={"/" + data.id}>{data.name}</Link></ListGroup.Item>
                  );
                })
              }
            </ListGroup>
          </div>
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
