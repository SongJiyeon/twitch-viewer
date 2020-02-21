import React from 'react';

export default function Modal ({ onClose, children }) {
  return (
    <>
      <div className='modal-background' onClick={onClose}></div>
      <div className='modal-container modal'>
        <button className='modal-close' onClick={onClose}>
          <i className='fas fa-times fa-3x'></i>
        </button>
        {children}
      </div>
    </>
  );
};
