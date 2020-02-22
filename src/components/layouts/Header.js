import React from 'react';
import '../style.css';

export default function Header ({logoUrl}) {

  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img src={logoUrl} className='header-logo-img' alt="logo"/>
      </div>
    </div>
  );
};
