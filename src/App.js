import React,  { useState, useEffect } from 'react';

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

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
  }, [])

  return (
      <Router>
        <div className="App">
          <div className="itemList">
            <Panel items={items}></Panel>
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
