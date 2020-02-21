import React from 'react';
import '../style.css';

export default function PrevBoxButtons ({ onClick }) {
  return (
    <>
      <button className='card-prev-button card-button' onClick={onClick}>
        <i className='fas fa-chevron-left fa-7x'></i>
      </button>
    </>
  );
}
