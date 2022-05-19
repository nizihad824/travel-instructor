import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.jpg'
import banner2 from '../../../Images/Banner/banner2.jpg'
import banner3 from '../../../Images/Banner/banner3.jpg'
import './Banner.css'

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        
          className="d-block w-100 max-height"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Venice</h3>
          <p>Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-height"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cinque Terre</h3>
          <p>Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards cling to steep terraces, </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 max-height"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Amalfi Coast</h3>
          <p>
          The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula, in the Campania region. It’s a popular holiday destination,
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;