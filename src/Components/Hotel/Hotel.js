import React, { useContext } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import HotelDesc from '../HotelDesc/HotelDesc';
import HeaderB from '../HeaderB/HeaderB';
import { PlaceContext } from '../../App';

const Hotel = () => {
    const[ selectedPlace, setSelectedPlace] = useContext(PlaceContext);
    const hotels = [
        {
            id: '1111',
            title: 'Light bright airy stylish apt & safe peaceful stay',
            quantity: '4 guests 2 bedrooms 2 beds 2 baths',
            kitchen: 'Wit Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            bill: '$34/night',
            total: '$167 total',
            imgUrl:'https://i.imgur.com/j9xZ3uJ.png'

        },
        {
            id: '2222',
            title: 'Apartment in Lost Panorama',
            quantity: '4 guests 2 bedrooms 2 beds 2 baths',
            kitchen: 'Wit Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            bill: '$52/night',
            total: '$200 total',
            imgUrl:'https://i.imgur.com/LGWLlIc.png'
        },
        {
            id: '3333',
            title: 'AR Lounge and Pool (r&r + b&b)',
            quantity: '4 guests 2 bedrooms 2 beds 2 baths',
            kitchen: 'Wit Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            bill: '$44/night',
            total: '$180 total',
            imgUrl:'https://i.imgur.com/f1nTItD.png'
        }
    ]
    return (
        <div>
            <HeaderB></HeaderB>
            <div className="twin-container"> 
                <div className="hotel">
                    {
                        hotels.map(hotel => <HotelDesc hotel={hotel}></HotelDesc>)
                    }
                </div>
                <div className="map">
                    
                </div>
            </div>
        </div>
    );
};

export default Hotel;