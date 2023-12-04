import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GrUpload } from 'react-icons/gr';
import { parseResumeFromPdf } from "../Components/ResumeParser/parser";

const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [resume, setResume] = useState(null);

  const handleFileChange = (event) => {
    // Handle file changes and update the selectedFile state

    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Only PDF files are allowed - working");
      fileInputRef.current.value = null; // Reset the input if not a PDF
    }
  };

  const handleUploadResume = () => {
    // Trigger the file input programmatically
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
    // Remove the selected file
    setSelectedFile(null);
    // Clear the file input
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
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={handleUploadResume} style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}>
          <GrUpload />
        </button>
      </div>
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* <button onClick={onImportClick} style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}>Import and Continue</button> */}
          <button onClick={handleRemoveFile} style={{ borderRadius: '15px', padding: '10px 20px', fontSize: '16px' }}>Remove File</button>
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
