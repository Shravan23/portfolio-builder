//OtherDetailsPage.jsx
import React from 'react';
import Images from './Images';
import Projects from './Projects';
import Links from './Links';

const OtherDetailsPage = ({ images, projectsData, linksData, onImagesChange, onProjectsChange, onLinksChange, onSubmit }) => {
  return (
    <div style={{ marginLeft: '114px', marginTop: '20px' }}>
      <Images images={images} setImages={onImagesChange} />
      <Projects projectsData={projectsData} setProjectsData={onProjectsChange} />
      <Links linksData={linksData} setLinksData={onLinksChange} />
      {/* Optionally, you can add a submit button */}
      <button onClick={onSubmit} style={{ borderRadius: '6px', backgroundColor: '#7349c2', color: 'white', padding: '8px', cursor: 'pointer', marginTop: '20px' }}>
        Submit
      </button>
    </div>
  );
};

export default OtherDetailsPage;
