import React from 'react';
import './HotelDesc.css';

const HotelDesc = (props) => {
    const { title, quantity, kitchen, extra, bill, total, imgUrl } = props.hotel;
    return (
        <div className="hotel-desc">
            <img className="img" src={imgUrl} alt="" />
            <div className="desc-text">
                <h5>{title}</h5>
                <p className="text-gray"><small>{quantity} <br /> {kitchen} <br /> {extra}</small></p>
                <p>4.9[20]   {bill}<span className="text-gray">{total}</span></p>
            </div>
        </div>
    );
};

export default HotelDesc;