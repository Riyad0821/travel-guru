import React from 'react';
import './Place.css';

const Place = (props) => {
    const { title, imgUrl} =  props.place;
    return (
        
        <div className="cardd" onClick={() => props.handlePlace(props.place)} style={{
            backgroundImage: `url(${(imgUrl)})`
          }}>
            <h3>{title}</h3>
        </div>
    );
};

export default Place;