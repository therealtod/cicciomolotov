import React from 'react';
import { getUsers } from '../utils/requests';
import { ListGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
import './Panel.css';

const Panel =  props => {

  return (
    <div >
      <div className="headerList"> 
      Item List 
      </div>
      <div className="scrollable">
        <ListGroup>
          {
            props.items.map(data=>{
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