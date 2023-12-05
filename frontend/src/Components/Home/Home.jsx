import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import showcase_icon from '../Assets/lap_showcase_1.jpg';
import visibility_icon from '../Assets/lap_showcase_2.jpg';
import branding_icon from '../Assets/lap_showcase_3.jpg';


const Home = () => {
    console.log("Home")
  return (
    <div className="home-container-main">
    <div className="home-container">
      <div className="text-box">
        <p className="typing-text"> <b>Welcome to Resume Genie</b></p>
        <div>Resume Genie is the final destination for your portfolio websites. Here you can create your own portfolio websites with preferred templates, which can showcase your skills in the best way possible
        Whether you're a seasoned professional or just starting out, our platform ensures ease of work for all, ensuring a seamless experience.
        </div>
        <Link to="/resumeUploadPage2" className="custom-button">Generate website without Login</Link>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={showcase_icon} alt="Showcase"  width="46%"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src={visibility_icon} alt="Visibility" width="46%" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={branding_icon} alt="Branding" width="46%" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
   </div> 
  );
};

export default Home;