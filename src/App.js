import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './pages/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log('😁', user);
      });
    }
    console.log('I have a Token', _token);
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
