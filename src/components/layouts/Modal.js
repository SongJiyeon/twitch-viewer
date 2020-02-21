import React from 'react';
import ModalDetails from '../ModalDetails';

export default function Modal ({ onClick, stream }) {
  return (
    <div className='modal' onClick={(event) => onClick(event)}>
      <div className='modal-container'>
        <button className='modal-close' onClick={event => onClick(event)}>
          <i className="fas fa-times fa-3x"></i>
        </button>
        <ModalDetails stream={stream} />
      </div>
    </div>
  );
};
