import React, { useContext } from 'react';
import '../css/Body.css';
import Header from '../components/Header';
import SpotifyContext from '../context/spotify/SpotifyContext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../components/SongRow';

function Body() {
  const { discover_weekly, playPlaylist, playSong } = useContext(
    SpotifyContext
  );

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
