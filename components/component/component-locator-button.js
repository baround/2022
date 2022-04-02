import {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
const LocatorButton = ({mapObject}) => {
  const marker = useRef(null);
  const getUserLocation = () => { 
    const blueDot = {
      fillColor: '#4285F4',
      fillOpacity: 1,
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      strokeColor: 'rgb(255,255,255)',
      strokeWeight: 2,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        mapObject.setCenter(userLocation); // ADDED
        mapObject.setZoom(18)
        if (marker.current) {
          marker.current.setMap(null);
        }
        marker.current = new google.maps.Marker({
          icon: blueDot,
          position: userLocation,
          title: 'You are here!'
        });
        try{
          marker.current.setMap(mapObject);  
        } catch(err){
          console.log(err)
        }
      });
    }
      
  };

  return (
    <button className='ctaLocator' type="button" onClick={getUserLocation}>
      Cerca intorno a te!
    </button>
  );
};
LocatorButton.propTypes = {
  mapObject: PropTypes.object,
};
export default LocatorButton;