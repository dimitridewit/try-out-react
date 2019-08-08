import React from 'react';

function Slide({
  isCurrent,
  image,
  title
}) {

  const classes = isCurrent ? 'slide current' : 'slide';

  return (
    <li className={classes}>
      <img src={image} alt={title} />
    </li>
  );
}

export default Slide;
