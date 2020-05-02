import React from 'react';
import { getUsers } from '../utils/requests';
import { ListGroup } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

class Panel extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                 <div className="headerList"> Item List </div>
            <div className="List">
              <ListGroup>
                {
                  items.map(data=>{
                    return (
                      <ListGroup.Item><Link to={"/" + data.id}>{data.name}</Link></ListGroup.Item>
                    );
                  })
                }
              </ListGroup>
            </div>
            </div>
           
        );
      }
    }
  }


export default Panel;