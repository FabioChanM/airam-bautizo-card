
import '../App.css';
import { Paper, Avatar, Button } from '@mui/material';
import Mano from './Mano.png';
function FinalNote() {
  return (
    <div className="App">
        <br />
    <Paper className='CardContainer'>
    <h5>GRACIAS POR COMPARTIR CONMIGO ESTE DIA TAN ESPECIAL EN EL COMIENZO UN NUEVO CAMINO EN VIDA</h5>
    <h5>GRACIAS POR CELEBRAR CONMIGO MI BAUTIZO</h5>
        <Button variant="contained"
        sx={{
        backgroundColor: "#000A2B",
        marginTop: "20px"
        }}>CONFIRMAR ASISTENCIA</Button>
    </Paper> 
    </div>
  );
}

export default FinalNote; 