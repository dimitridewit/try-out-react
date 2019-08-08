import React from 'react';

function ProgressBar({percentage}) {

  return (
    <div className='progress-bar'>
      <div
        className='filler'
        style={{width: `${percentage}%`}}
      />
    </div>
  );
}

export default ProgressBar;
