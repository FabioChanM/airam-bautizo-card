
import '../App.css';
import { Paper, Avatar, Button } from '@mui/material';
import Mano from './Mano.png';
function PlaceCard() {
  return (
    <div className="App">
        <br />
    <Paper className='CardContainer'>
        <br /> 
    <h2>MISA</h2>
        <Avatar
          sx={{ width: 120, height: 120 }}
        className='avatar'
        src={Mano}/>
        <h3>PARROQUIA SAN BENITO</h3>
        <h4>HORA 5:PM</h4>
        <span>AV 5 COLONIAS INDUSTRIAS NO CONTTAMINANTES</span>
        <br /> 
        <Button variant="contained"
        sx={{
        backgroundColor: "#000A2B",
        marginTop: "20px"
        }}>VER UBICACION</Button>
    </Paper> 

    <br />
    <Paper className='CardContainer'>
        <br /> 
        <Avatar
          sx={{ width: 120, height: 120 }}
        className='avatar'
        src={Mano}/>
        <h3>CASA DE ARMIN</h3>
        <h4>HORA 7:PM</h4>
        <span>AV 5 COLONIAS INDUSTRIAS NO CONTTAMINANTES</span>
        <br /> 
        <Button variant="contained"
        sx={{
        backgroundColor: "#000A2B",
        marginTop: "20px"
        }}>VER UBICACION</Button>
    </Paper>
    </div>
  );
}

export default PlaceCard; 