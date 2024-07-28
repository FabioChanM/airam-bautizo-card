
import CenterImg from './Atoms/Centerimg';
import Name from './Atoms/Name';
import Timer from './Atoms/Timer'
import Textlight from './Atoms/Textlight';
import Handimg from './Atoms/Handimg';
import Parents from './Atoms/Parantes';
import PetsImg from './Atoms/PestImg';
import LeyendGod from  './Atoms/GodLeyend';
import Date from './Atoms/Date';
import PlaceCard from './Atoms/PlaceCard';
import FinalNote from './Atoms/FinalNote';
import PlayerMusic from './Atoms/MusiscPlayer';


function App() {
  return (
    <div className="App">
      <CenterImg/>
      <Name/>
      <Timer/>
      {/* <PlayerMusic/> */}
      <Textlight/>
      <Handimg/>
      <Parents/>
      <PetsImg/>
      <LeyendGod/>
      <Date/>
      <PlaceCard/>
      <FinalNote/>
    </div>
  );
}

export default App;
