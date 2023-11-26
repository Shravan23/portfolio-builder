// Images.js
import React, { useState } from 'react';

const Images = ({ images, setImages }) => {
  const handleFileChange = (e) => {
    const fileList = e.target.files;
    // Convert FileList to an array and update the state
    const filesArray = Array.from(fileList);
    setImages((prevImages) => [...prevImages, ...filesArray]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Upload Images</h2>
      <label htmlFor="imageUpload" style={{ cursor: 'pointer' }}>
        📷 Upload Images
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div>
        {images.map((image, index) => (
          <div key={index}>
            <p>{image.name}</p>
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
