import React from 'react';

function IconButton(props) {
  return <button {...props} className='icon-button'>{props.content}</button>;
}

export default IconButton;
