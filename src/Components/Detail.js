import React from 'react';
import './Detail.css';
import {
    useParams
  } from 'react-router-dom' 
function Detail() {
    let { itemId } = useParams()
    return (
        <div className="detail">{itemId}</div>
    );
}

export default Detail;
