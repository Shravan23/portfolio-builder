//SkillsAndCertifications.jsx
import React, { useState } from 'react';

const SkillsAndCertifications = ({ skills, setSkills, certifications, setCertifications }) => {
  const handleSkillsChange = (e) => {
    setSkills(e.target.value);
  };

  const handleCertificationsChange = (index, e) => {
    const { value } = e.target;
    setCertifications((prevData) => {
      const newData = [...prevData];
      newData[index] = value;
      return newData;
    });
  };

  const handleAddCertification = () => {
    setCertifications((prevData) => [...prevData, '']);
  };

  const handleRemoveCertification = (index) => {
    setCertifications((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Skills</h2>
      <label>
        Skills:
        <textarea rows="4" cols="50" value={skills} onChange={handleSkillsChange} />
      </label>
      <br />
      <h2>Certifications and Publications:</h2>
      {certifications.map((certification, index) => (
        <div key={index}>
          <textarea
            rows="4"
            cols="50"
            value={certification}
            onChange={(e) => handleCertificationsChange(index, e)}
          />
          <br />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveCertification(index)}
              style={{
                borderRadius: '6px',
                backgroundColor: '#7349c2',
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
        onClick={handleAddCertification}
        style={{
          borderRadius: '6px',
          backgroundColor: '#7349c2',
          color: 'white',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        + Add Certification/Publication
      </button>
    </div>
  );
};

export default SkillsAndCertifications;
