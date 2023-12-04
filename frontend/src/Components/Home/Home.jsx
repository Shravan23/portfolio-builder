import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import showcase_icon from '../Assets/showcase.jpg';
import visibility_icon from '../Assets/visibility.jpg';
import branding_icon from '../Assets/branding.png';

const Home = () => {
    console.log("Home")
  return (
    <div className="home-container">
      <div className="text-box">
        <p className="typing-text"> Welcome to Resume Genie </p>
        <div>Resume Genie is the final destination for your portfolio websites. Here you can create your own websites with preferred templates, which can showcase your skills in the best way possible</div>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={showcase_icon} alt="Showcase" />
            <Carousel.Caption>
              <h3>Showcase your work</h3>
              <p>People in your industry will love to view your work.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={visibility_icon} alt="Visibility" />
            <Carousel.Caption>
              <h3>Increasing visibility</h3>
              <p>Increase your online presence, and many people may discover your work.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={branding_icon} alt="Branding" />
            <Carousel.Caption>
              <h3>Build your personal brand.</h3>
              <p>Your personal brand sets you apart from others and showcases your unique style.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
     {/* <div className="text-box2">
        <div>Whether you're a seasoned professional or just starting, our platform ensures your work shines on any device. Responsive design means your portfolio looks stunning on desktops, tablets, and smartphones, providing a seamless experience for visitors wherever they are</div>

      </div> */}
    </div>
  );
};

export default Home;