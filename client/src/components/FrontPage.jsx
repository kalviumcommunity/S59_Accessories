import React, { useState, useEffect } from 'react';

export default function FrontPage() {
  const [randomWord, setRandomWord] = useState('');
  const [randomimage, setRandomImage] = useState('');

  useEffect(() => {
    const words = ['Weirdest', 'Funniest', 'Creepiest'];
    const image = ['/assets/straw_glass.png','/assets/transparent_moustache.png','/assets/toiletpaper_earrings.png'];
    const intervalId = setInterval(() => {
      const currentIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[currentIndex]);
      setRandomImage(image[currentIndex]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='FirstBanner'>
      <div className='banner-text'>
        Find out World's <br></br>MOST<br></br>"{randomWord}"<br></br> Accessories.
      </div>
      <div className='banner-img'>
        <img src={randomimage} alt='funny accessory' />
      </div>
    </div>
  );
}
