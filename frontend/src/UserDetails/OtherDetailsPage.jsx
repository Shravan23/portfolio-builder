import React from 'react';
import Images from './Images';
import Projects from './Projects';
import Links from './Links';
import { useNavigate } from 'react-router-dom';

const OtherDetailsPage = ({ images, projectsData, linksData, onImagesChange, onProjectsChange, onLinksChange, onSubmit }) => {
  const navigate = useNavigate(); 

  const handleFormSubmit = () => {
    // Your form submission logic
    onSubmit();

    // Navigate to the "/templatepage" route
    navigate('/templatepage');
  };

  return (
    <div style={{ marginLeft: '114px', marginTop: '20px' }}>
      <Images images={images} setImages={onImagesChange} />
      <Projects projectsData={projectsData} setProjectsData={onProjectsChange} />
      <Links linksData={linksData} setLinksData={onLinksChange} />
      {/* Optionally, you can add a submit button */}
      <button onClick={handleFormSubmit} style={{ borderRadius: '6px', backgroundColor: '#9370DB', color: 'white', padding: '8px', cursor: 'pointer', marginTop: '20px' }}>
        Submit
      </button>
    </div>
  );
};

export default OtherDetailsPage;
