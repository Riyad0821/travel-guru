import React, { useContext } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { PlaceContext } from '../../App';

const GoogleMap = () => {
    const [place, setPlace] = useContext(PlaceContext)
    return (
        <div>
            <Map google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                    name={place} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyC8OORvsizT-cYStuSJqumnpY7mtzpGbSw")
  })(GoogleMap)