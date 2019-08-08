import React, {
  useState,
  useEffect,
} from 'react';

import slides from '../../carouselslides';
import Slide from './Slide';
import Slides from './Slides';
import IconButton from './IconButton';
import ProgressBar from './ProgressBar';

function Carousel() {
  let [currentIndex, setCurrentIndex] = useState(0);
  let [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % slides.length);
      }, 2500);

      return () => clearTimeout(timeout);
    }
  },[currentIndex, isPlaying]);

  const progress = ((1 + currentIndex) / slides.length);

  return (
    <div className='carousel'>
      <Slides>
        {slides.map((image, index) => {
          return (
            <Slide
              key={index}
              image={image.img}
              title={image.title}
              isCurrent={index === currentIndex}
            />
          );
        })}
      </Slides>
      <div className='controls'>
        { isPlaying ? (
          <IconButton
            onClick={() => {
              setIsPlaying(false);
            }}
            content={'Pause'}
          />
        ) : (
          <IconButton
            onClick={() => {
              setIsPlaying(true);
            }}
            content={'Play'}
          />
        )}
        <IconButton
          onClick={() => {
            setCurrentIndex((currentIndex  + 1) % slides.length)
          }}
          content={'Next'}
        />
        <IconButton
          onClick={() => {
            setCurrentIndex((currentIndex  - 1 + slides.length) % slides.length)
          }}
          content={'Prev'}
        />
        <ProgressBar percentage={(progress * 100)} />
      </div>
    </div>
  );
}

export default Carousel;
