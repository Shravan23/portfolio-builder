import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GrUpload } from 'react-icons/gr';
import { parseResumeFromPdf } from "../Components/ResumeParser/parser";
import './ResumeUploadPage.css'; // Import your CSS file

const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file changes and update the selectedFile state

    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Only PDF files are allowed");
      fileInputRef.current.value = null;
    }
  };

  const handleUploadResume = () => {
    fileInputRef.current.click();
  };

  const handleUserInfo = async (resume) => {
    try {
      const response = await axios.post(
        'https://portfolio-builder-backend.onrender.com/v1/user/json',
        resume,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  const onImportClick = async () => {
    if (selectedFile) {
      try {
        const fileUrl = URL.createObjectURL(selectedFile);
        const resumeData = await parseResumeFromPdf(fileUrl);
        URL.revokeObjectURL(fileUrl);
        if (localStorage.getItem('token')) {
          handleUserInfo(resumeData);
          navigate('/portfolioCard', { state: { resume: resumeData } });
        } else {
          navigate('/portfolioCard2', { state: { resume: resumeData } });
        }

      } catch (error) {
        alert("Failed to parse the resume");
      }
    } else {
      alert("No file selected");
    }
  };

  const handleRedirect = (resumeData) => {

  };

  return (
    <div
      style={{
        maxWidth: '400px',
        padding: '20px',
        borderRadius: '15px',
        border: '2px solid #00308F',
        backgroundColor: '#ADD8E6',
        position: 'relative',
        top: '10rem',
        left: '32rem'
      }}
    >
      <h2 style={{ color: '#00308F', marginLeft: '50px' }}>Upload Resume</h2>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <div className="upload-btn-container">
        <button onClick={handleUploadResume} className="upload-btn">
          <GrUpload />
        </button>
      </div>
      {selectedFile && (
        <div className="file-info">
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleRemoveFile} className="action-btn">Remove File</button>
        </div>
      )}

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={onImportClick}
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
