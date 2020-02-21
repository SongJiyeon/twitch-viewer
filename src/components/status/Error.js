import React from 'react';

export default function Error () {

  setTimeout(() => {
    window.location.reload();
  }, 2000);

  return (
    <div className='error-container'>
      Fail To Load &#128561;
    </div>
  );
};
