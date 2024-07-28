
import '../App.css';
import Face from'./Face.png';
import { Avatar } from '@mui/material';
function LeyendGod() {
  return (
    <div className="App Godleyend">
      <Avatar
          sx={{ width: 120, height: 120 }}
        className='avatar'
        src={Face}/>
        <br />
     <span>SEÑOR HOY ME PRESENTAN A TI PARA SER BAÑADA CON LA GRACIA DE TU AMOR, TOMA MI CORAZON Y MANTENME JUNTO A TI</span>
    </div>
  );
}

export default LeyendGod; 