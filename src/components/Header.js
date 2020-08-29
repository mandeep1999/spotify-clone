import React, { useContext } from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import SpotifyContext from '../context/spotify/SpotifyContext';

function Header() {
  const spotifyContext = useContext(SpotifyContext);
  const { user } = spotifyContext;
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for artist, songs, albums" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />{' '}
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
