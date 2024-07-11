import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel } from 'react-bootstrap';
 import image1 from './image1.jpg';
 import image2 from './image2.jpeg';
 import image3 from './image3.jpeg';
import './Carousel.css';


const ProjectCarousel = () => {
    return (
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide - Institute Management System"
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3>No pain, no gain</h3>
              <p>
              “The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.” – Michelle Obama</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Second slide - Institute Management System"
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3>The harder you work, the better the results</h3>
              <p>“The only thing standing between you and your goal is the story you keep telling yourself as to why you can’t achieve it.” – Jordan Belfort</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide - Project Management System"
          />
          <Carousel.Caption>
            <div
              style={{
                color: '#000',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
                marginBottom :'320px',
                padding: '20px',
                borderRadius: '10px',
                display: 'inline-block'
              }}
            >
              <h3>Sweat is just fat crying</h3>
              <p>“The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.” – Arnold Schwarzenegger</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ProjectCarousel;