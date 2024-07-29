
import '../App.css';
import Chip from '@mui/material/Chip';
import Leyend from './Leyend';
function Name() {
  return (
    <div className="App Name">
      <h3>Mi bautizo</h3>
      <h1>Airam</h1>
      <Chip label="- 11 AGOSTO 2024 -"  sx={{
         backgroundColor: '#000A2B',
         color: 'white',
          
        }} />
        <Leyend/>
    </div>
  );
}

export default Name; 