import React, { useEffect, useContext } from 'react';
import './App.css';
import Login from './pages/Login';
import Player from './pages/Player';
import SpotifyContext from './context/spotify/SpotifyContext';

function App() {
  const spotifyContext = useContext(SpotifyContext);
  const {
    token,
    setToken,
    setUser,
    setPlaylist,
    getPlaylist,
    getTopArtist,
  } = spotifyContext;

  useEffect(() => {
    setToken();
    setUser();
    setPlaylist();
    getPlaylist();
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
