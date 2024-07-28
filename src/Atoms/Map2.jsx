
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 21.1619, // Coordenadas de Mérida, Yucatán
  lng: -89.1579
};

function Map2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', borderRadius: '20px' }}>
    <iframe
     src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3724.987069166309!2d-89.68911429668893!3d20.993155448767833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU5JzMzLjgiTiA4OcKwNDEnMTUuMyJX!5e0!3m2!1sen!2smx!4v1722197001873!5m2!1sen!2smx"
      width="250"
      height="250"
      style={{ border: 20 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default Map2;
