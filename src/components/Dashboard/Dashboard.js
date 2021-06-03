import React from 'react';
import './Dashboard.css';
import image from './fireshort.png';
export default function Dashboard(){
    return(
        <div className="wrapper">
            <div className="preview">
                <img src={image}  className="img-preview" />
                <p id="title">title</p>
            </div>

        </div>
    );
}