import React from 'react';
import './style.css';

export default function Header () {

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src="https://brand.twitch.tv/assets/logos/svg/wordmark-extruded/black.svg" className='header-logo-img' alt="twitch logo"/>
      </div>
    </div>
  );
};
