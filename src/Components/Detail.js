import React from 'react';
import './Detail.css';
import {
    useParams
  } from 'react-router-dom' 
import { getUserDetails } from '../utils/requests'
function Detail(props) {
    let { itemId } = useParams()
    let userData = getUserDetails(itemId)
    return (
        <div className="detail">{userData}</div>
    );
}

export default Detail;
