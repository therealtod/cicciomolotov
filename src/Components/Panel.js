import React, { useState } from 'react';
import { ListGroup, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import './Panel.css';
import { BsSearch } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Panel(props) {
  let { x } = "ciao";
  function selectAction (oEvt) {console.log(oEvt)};
  return (
    <div >
      <div className="headerList">
        Item List
      </div>
      <div>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="searchBar" />
          <Button className="searchButton" variant="outline-success">
            <BsSearch />
          </Button>
          <Dropdown onSelect={selectAction}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Ordina per: {x}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </div>
      <div className="scrollable">
        <ListGroup>
          {
            props.items.map(data => {
              return (
                <ListGroup.Item><Link key={data.id} to={"/" + data.id}>{data.name}</Link></ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </div>
    </div>
  );
}



export default Panel;