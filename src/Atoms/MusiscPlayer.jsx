import React, { useEffect, useState } from 'react';
import '../App.css';
import { Paper, CircularProgress } from '@mui/material';
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import KingLion from './KingLion.mp3';

const tracks = [
  {
    url: KingLion,
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const colors = {
  tagsBackground: "#3e32e4",
  tagsText: "#ffffff",
  tagsBackgroundHoverActive: "#6e65f1",
  tagsTextHoverActive: "#ffffff",
  searchBackground: "#18191f",
  searchText: "#ffffff",
  searchPlaceHolder: "#575a77",
  playerBackground: "#18191f",
  titleColor: "#ffffff",
  timeColor: "#ffffff",
  progressSlider: "#3e32e4",
  progressUsed: "#ffffff",
  progressLeft: "#151616",
  bufferLoaded: "#1f212b",
  volumeSlider: "#3e32e4",
  volumeUsed: "#ffffff",
  volumeLeft: "#151616",
  playlistBackground: "#18191f",
  playlistText: "#575a77",
  playlistBackgroundHoverActive: "#18191f",
  playlistTextHoverActive: "#ffffff",
};

function PlayerMusic() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <br />
      {isLoading ? (
        <div className="LoadingContainer">
          <CircularProgress />
        </div>
      ) : (
        <Paper className='CardContainer'>
          <Player 
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlaylist={false}
            sortTracks={true}
            autoPlayNextTrack={false}
            customColorScheme={colors}
          />
        </Paper>
      )}
    </div>
  );
}

export default PlayerMusic;
