import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GrUpload } from 'react-icons/gr';
import { parseResumeFromPdf } from "../Components/ResumeParser/parser";
import { Link } from 'react-router-dom';
import './ResumeUploadPage.css'; 

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
        console.log(typeof(selectedFile));
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
   <div>
      <div className="resume-container">
        <h2>What is your preferred method for building your portfolio website?</h2>
      </div>

      <div className="resume-options-container">
        <Link to="/PortfolioCard2" style={{ textDecoration: 'none' }}>
          <div className="resume-upload-card">
            <h2 style={{ color: '#00308F', marginLeft: '50px' }}>Create Without Resume</h2>
            <h5 style={{ color: 'black',fontWeight: 'bold', fontSize: '20px', marginTop: '25px' }}>Let us help you build your portfolio website by providing guidance and support at every stage</h5>
          </div>
        </Link>

        <div className="resume-upload-card">
          <h2 style={{ color: '#00308F', marginLeft: '50px' }}>Upload Resume</h2>
          <h5 style={{ fontWeight: 'bold', fontSize: '19px' }}>Please upload your existing resume (only PDF accepted)</h5>
          <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
          <div className="upload-btn-container">
            <button onClick={handleUploadResume} className="upload-btn" style={{ height: '45px', width: '32px', color: 'white'}}>
              <GrUpload />
            </button>
          </div>
          {selectedFile && (
            <div className="file-info">
              <p>Selected File: {selectedFile.name}</p>
              <button onClick={handleRemoveFile} className="action-btn">
                Remove File
              </button>
            </div>
          )}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <button onClick={onImportClick} disabled={!selectedFile} className="submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default ResumeUploadPage;