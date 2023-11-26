//Links.jsx
import React, { useState } from 'react';

const Links = ({ linksData, setLinksData }) => {
  const handleLinkChange = (index, value) => {
    setLinksData((prevData) => {
      const newData = [...prevData];
      newData[index] = value;
      return newData;
    });
  };

  const handleAddLink = () => {
    setLinksData((prevData) => [...prevData, '']);
  };

  const handleRemoveLink = (index) => {
    setLinksData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Links</h2>
      {linksData.map((link, index) => (
        <div key={index}>
          <label>
            URL:
            <input
              type="text"
              value={link}
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
          </label>
          <br />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveLink(index)}
              style={{
                borderRadius: '6px',
                backgroundColor: '#9370DB',
                color: 'white',
                padding: '6px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          )}
          <hr />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddLink}
        style={{
          borderRadius: '6px',
          backgroundColor: '#9370DB',
          color: 'white',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        + Add Link
      </button>
    </div>
  );
};

export default Links;
