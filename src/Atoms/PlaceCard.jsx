
import '../App.css';
import { Paper, Avatar, Button } from '@mui/material';
import Mano from './Casa_Airam.png';
import Casa from'./Casa.png';
import Map from './Map';
import Map2 from './Map2';
function PlaceCard() {
  return (
    <div className="App">
        <br />
    <Paper className='CardContainer'>
        <br /> 
    <h2>LUGAR DE CELEBRACION</h2>
        <Avatar
          sx={{ width: 120, height: 120 }}
        className='avatar'
        src={Mano}/>
        <br />
        <h3>CASA DE AIRAM</h3>
        <br />
        <h4>HORA 8:00 AM DESAYUNO</h4>
        <h4>HORA 10:00 AM SHOW INFALTIL</h4>
        <Map/>
    </Paper> 
    </div>
  );
}

export default PlaceCard; 