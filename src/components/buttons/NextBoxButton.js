import React from 'react';
import '../style.css';

export default function NextBoxButtons ({ onClick }) {
  return (
    <>
      <button className='card-next-button card-button' onClick={onClick}>
        <i className="fas fa-chevron-right fa-7x"></i>
      </button>
    </>
  );
}
