import React from 'react';

export default function CardList ( {title} ) {

  setTimeout(() => {
    window.location.reload();
  }, 2000);

  return (
    <div className='error-container'>
      Fail To Load {title} 😱
    </div>
  );
};
