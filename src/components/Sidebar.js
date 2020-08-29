import React, { useContext } from 'react';
import '../css/Sidebar.css';
import SidebarOption from '../components/SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SpotifyContext from '../context/spotify/SpotifyContext';

const Sidebar = () => {
  const spotifyContext = useContext(SpotifyContext);
  const { playlists } = spotifyContext;
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="
      https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
