
import ReactAudioPlayer from 'react-audio-player';
import Track from "./Sirenita.mp3";
import '../App.css';

function PlayerMusic() {
  return (
    <div>
      <br />
      <ReactAudioPlayer
        src={Track}
        controls

        autoPlay = {true}
      />
    </div>
  );
}

export default PlayerMusic;
