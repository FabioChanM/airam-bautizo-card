
import '../App.css';
import { Paper, Avatar, Button } from '@mui/material';
import Mano from './Capilla.jpg';
import Casa from'./Casa.png';
import Map from './Map';
import Map2 from './Map2';
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
        <br />
        <h3>PARROQUIA NUESTRA SEÑORA DE ENCARNACIÓN</h3>
        <br />
        <h4>HORA 9:30 AM MISA</h4>
        <br />
        <h4>Bautizo</h4>
        <Map/>
    </Paper> 

    <br />
    <Paper className='CardContainer'>
        <br /> 
        <Avatar
          sx={{ width: 120, height: 120 }}
        className='avatar'
        src={Casa}/>
              <br />
        <h3>CASA DE CELEBRACIÓN FAMILIAR</h3>
        <br />
        <h4>HORA 2:00 PM</h4>
        <br />
        <span>CIUDAD CAUCEL</span>
        <br />
        <span>Cerca de la hacienca Anicabil</span>
        <br /> 
        <Map2/>
    </Paper>
    </div>
  );
}

export default PlaceCard; 