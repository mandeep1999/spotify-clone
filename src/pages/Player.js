import React from 'react';
import '../css/Player.css';
import Sidebar from '../components/Sidebar';
import Body from '../components/Body';
import Footer from '../components/Footer';

const Player = () => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Player;
