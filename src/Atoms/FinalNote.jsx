import React from 'react';
import '../App.css';
import { Paper, Button } from '@mui/material';
import Mano from './Mano.png'; // Asegúrate de que este archivo esté en la ruta correcta

function FinalNote() {
  const phoneNumber = '+529991359880'; // Asegúrate de incluir el código de país (ej. 52 para México)
  const message = encodeURIComponent('¡Hola! Confirmo mi asistencia.');
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <div className="App">
      <br />
      <Paper className='CardContainer'>
        <h5>GRACIAS POR COMPARTIR CONMIGO ESTE DÍA TAN ESPECIAL EN EL COMIENZO DE UN NUEVO CAMINO EN LA VIDA</h5>
        <h5>GRACIAS POR CELEBRAR CONMIGO MI BAUTIZO</h5>
        <Button 
          variant="contained" 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#000A2B",
            marginTop: "20px"
          }}
        >
          CONFIRMAR ASISTENCIA
        </Button>
      </Paper>
    </div>
  );
}

export default FinalNote;
