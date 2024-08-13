
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.411702802989!2d-89.62004212553737!3d20.93597548069025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56718fb03da633%3A0xc43a89d2ec86f56!2sC.%2048%20738%2C%20Cinco%20Colonias%2C%2097280%20M%C3%A9rida%2C%20Yuc.!5e0!3m2!1sen!2smx!4v1723563150044!5m2!1sen!2smx"
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
