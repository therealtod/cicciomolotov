import React from 'react';
import './Detail.css';
import {
    useParams
  } from 'react-router-dom' 
function Detail() {
    let { itemId } = useParams()
    return (
        <div>
        <div className="detailHeader">CIAO</div>
        <div className="detail">{itemId}</div>
        </div>
    );
}

export default Detail;
