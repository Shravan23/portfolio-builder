import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrUpload } from 'react-icons/gr';

const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file changes and update the selectedFile state
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadResume = () => {
    // Trigger the file input programmatically
    fileInputRef.current.click();
  };

  const handleFileSelect = () => {
    // Handle file selection logic here
    const file = fileInputRef.current.files[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    // Remove the selected file
    setSelectedFile(null);
    // Clear the file input
    fileInputRef.current.value = null;
  };

  const handleRedirect = () => {
    // Redirect to the portfolioCard page
    navigate('/portfolioCard');
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '100px auto',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid #00308F', 
        backgroundColor: '#ADD8E6',
      }}
    >
      <h2 style={{ color: '#00308F', marginLeft: '50px' }}>Upload Resume</h2>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={handleUploadResume} style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}>
          <GrUpload />
        </button>
      </div>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleRemoveFile} style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}>Remove File</button>
        </div>
      )}

      <div  style={{ textAlign: 'center', marginBottom: '20px' }}>
      <button
        onClick={handleRedirect}
        disabled={!selectedFile}
        style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}
        >
        Submit
      </button>
      </div>
      
    </div>
  );
};

export default ResumeUploadPage;
