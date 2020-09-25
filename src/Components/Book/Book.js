import React, { useContext, useState } from 'react';
import { PlaceContext } from '../../App';
import './Book.css'
import bg from '../../images/background.png'
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Book = () => {

    const [selectedPlace, setSelectedPlace] = useContext(PlaceContext);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="book">
            <Header></Header>
            <div className="twin-container">
                <div className="place-detail">
                    <h1 >{selectedPlace.title}</h1>
                    <p>{selectedPlace.description}</p>
                </div>
                <div className='card book-card'>
                    <form action="" className='book-card'>
                        <label htmlFor="">Origin</label>
                        <input placeholder="Dhaka" type="text" required />
                        <label htmlFor="">Destination</label>
                        <input value={selectedPlace.title} type="text" />
                        <br />
                        <label htmlFor="">From</label>
                        <DatePicker placeholderText="DD/MM/YYYY" selected={startDate} onChange={date => setStartDate(date)}
                            required></DatePicker>
                        <label htmlFor="">To</label>
                        <DatePicker placeholderText="DD/MM/YYYY" selected={endDate} onChange={date => setEndDate(date)} required></DatePicker>
                        <br />
                        <br />
                        <Link className="bookBtn" to="/hotel">Start Booking</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;