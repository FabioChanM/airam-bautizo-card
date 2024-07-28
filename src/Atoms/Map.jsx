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

function Map() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', borderRadius: '20px' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29811.72263138513!2d-89.65023994445797!3d20.93382019702703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f567191be012c8b%3A0xde26ecdeb4a708b4!2sCapilla%20Nuestra%20Se%C3%B1ora%20de%20la%20Encarnaci%C3%B3n!5e0!3m2!1sen!2smx!4v1722196188822!5m2!1sen!2smx"
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

export default Map;
