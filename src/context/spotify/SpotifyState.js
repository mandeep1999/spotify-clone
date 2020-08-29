import React, { useReducer } from 'react';
import SpotifyContext from './SpotifyContext';
import SpotifyWebApi from 'spotify-web-api-js';
import SpotifyReducer from './spotifyReducer';
import { getTokenFromUrl } from '../../spotify';
import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
  SET_PLAYING,
  SET_ITEM,
  SET_TOP_ARTISTS,
  SET_SPOTIFY,
} from '../types';

const spotify = new SpotifyWebApi();

const SpotifyState = (props) => {
  const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    // 'BQC9oCWL1j5SZr-FCI59k5TcSBwU5-l2skbTUGD-rsguBR-_lB_ywCm-MbgpAXYMSQeTwMMMFO0RjZpcIGt5ZYiU5k-v21FsHRvRCJKf8oX4TgdgBw5lig1WrxqaH2HQYcvnYuCSd3jaLvplfxhGb0gNlpG3HPrfO73QCx5q2Z6UJxu8',
  };
  const [state, dispatch] = useReducer(SpotifyReducer, initialState);

  // SET_USER
  const setUser = () => {
    spotify.getMe().then((user) => {
      dispatch({
        type: SET_USER,
        user: user,
      });
    });
  };

  // SET_TOKEN
  const setToken = () => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: SET_TOKEN,
        token: _token,
      });
      spotify.setAccessToken(_token);
    }
  };

  // SET_PLAYLISTS
  const setPlaylist = () => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: SET_PLAYLISTS,
        playlists: playlists,
      });
    });
  };

  //GET PLAYLIST
  const getPlaylist = () => {
    spotify.getPlaylist('37i9dQZEVXcKb5Cs3yuS6O').then((response) => {
      dispatch({
        type: SET_DISCOVER_WEEKLY,
        discover_weekly: response,
      });
    });
  };

  return (
    <SpotifyContext.Provider
      value={{
        user: state.user,
        playlists: state.playlists,
        playing: state.playing,
        item: state.item,
        discover_weekly: state.discover_weekly,
        token: state.token,
        setUser,
        setToken,
        setPlaylist,
        getPlaylist,
      }}
    >
      {props.children}
    </SpotifyContext.Provider>
  );
};
export default SpotifyState;
