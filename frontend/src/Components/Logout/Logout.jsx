import React, { useState } from 'react';
import './Logout.css';

const Logout = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploadMessage, setFileUploadMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUploadFile = () => {
    if (selectedFile) {
      setFileUploadMessage('File has been uploaded successfully.');
    }
  };

  return (
    <div className="page-container">
      <button className="logout-button">Logout</button>
      <div className="file-upload-container">
        <div className="Header-logout"><b>Welcome to Resume Genie</b></div>
        <p><b>Web Page is still under construction</b></p>
        <input type="file" accept=".pdf, .jpg, .png" onChange={handleFileChange} />
        <button onClick={handleUploadFile}>Upload File</button>
        {fileUploadMessage && <p>{fileUploadMessage}</p>}
      </div>
    </div>
  );
};

export default Logout;
