import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import showcase_icon from '../Assets/visibility2.jpg';
import visibility_icon from '../Assets/visibility.jpg';
import branding_icon from '../Assets/backjpg.jpg';



const Home = () => {
    console.log("Home")
  return (
    <div className="home-container-main">
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
              <h3 className="showcase-heading">Showcase your work</h3>
              <p className="showcase-text">People in your industry will love to view your work.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={visibility_icon} alt="Visibility" />
            <Carousel.Caption>
              <h3 className="visibility-heading">Increasing visibility</h3>
              <p className="visibility-text">Increase your online presence, and many people may discover your work.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={branding_icon} alt="Branding" />
            <Carousel.Caption>
              <h3 className="branding-heading">Build your personal brand.</h3>
              <p className="branding-text">Your personal brand showcases your unique style.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
     
       

    </div>
      <div className="additional-text-box">
     <p>Whether you're a seasoned professional or just starting out, our platform ensures ease of work for all, ensuring a seamless experience.</p>
     <Link to="/resumeUploadPage2" className="custom-button">Generate website without account</Link>
   </div> 
   </div>

  
  );
};

export default Home;