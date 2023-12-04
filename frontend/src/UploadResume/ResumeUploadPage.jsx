import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrUpload } from 'react-icons/gr';
import { parseResumeFromPdf } from "../Components/ResumeParser/parser";
import './ResumeUploadPage.css'; // Import your CSS file

const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
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
        handleRedirect(resumeData);
      } catch (error) {
        alert("Failed to parse the resume");
      }
    } else {
      alert("No file selected");
    }
  };

  const handleRedirect = (resumeData) => {
    navigate('/portfolioCard', { state: { resume: resumeData } });
  };

  return (
    <div className="resume-upload-container">
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
      <div className="submit-btn-container">
        <button
          onClick={onImportClick}
          disabled={!selectedFile}
          className="action-btn"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ResumeUploadPage;
