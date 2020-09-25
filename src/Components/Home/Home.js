import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
import bg from '../../images/background.png'
import Desc from '../Desc/Desc';
import Header from '../Header/Header';
import Place from '../Place/Place';
import './Home.css'

const Home = () => {
    const [ place, setPlace ] = useState({
            id: '1111',
            title: 'SREEMANGAL',
            description: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden.',
            imgUrl:'https://i.imgur.com/IHaCZaE.png'
    });

    const [ selectedPlace, setSelectedPlace] = useContext(PlaceContext);

    const style = {
        display: 'flex',
        margin: '10px',
        justifyContent: 'space-between'
    }
    const places = [
        {
            id: '1111',
            title: 'SREEMANGAL',
            description: 'Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden.',
            imgUrl:'https://i.imgur.com/IHaCZaE.png'

        },
        {
            id: '2222',
            title: 'SAJEK',
            description: 'Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable.',
            imgUrl:'https://i.imgur.com/gPAf8k6.png'
        },
        {
            id: '3333',
            title: 'SUNDARBANS',
            description: 'The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal.',
            imgUrl:'https://i.imgur.com/jiY7uEN.png'
        }
    ]
 
    const handlePlace = (place) => {
        setPlace(place);
        setSelectedPlace(place);
    }

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bg})` }} className="home">
            <Header></Header>

            <div className="twin-container">
                <div className="place-detail">
                    <h1 >{place.title}</h1>
                    <p>{place.description}</p>
                    <Link place={place} to="/book"><button className="btn">Booking</button></Link>
                </div>
                <div style={style} className="places">
                   {
                        places.map(place => <Place key={place.id}
                            handlePlace = {handlePlace} 
                            place={place}></Place>)
                   }
                </div>
            </div>
        </div>
        
    );
};

export default Home;