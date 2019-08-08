import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel />
      <div className="snap-point-gallery">
        <div className="gallery-img red"/>
        <div className="gallery-img orange"/>
        <div className="gallery-img yellow"/>
      </div>
    </div>
  );
}

export default App;
