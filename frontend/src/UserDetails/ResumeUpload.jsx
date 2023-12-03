// ResumeUpload.js
import React, { useState } from 'react';

const ResumeUpload = ({ onSubmit }) => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file);
  };

  const handleSubmit = () => {
    // You can perform any necessary actions with the uploaded file here
    // For now, let's just pass the resumeFile to the onSubmit callback
    onSubmit(resumeFile);
  };

  return (
    <div>
      <h2>Upload the Resume</h2>
      <p>Upload your resume file:</p>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <br />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ResumeUpload;
