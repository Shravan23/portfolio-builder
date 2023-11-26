// Education.jsx
import React, { useState } from 'react';

const Education = ({ educationData, setEducationData }) => {
  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleAddEducation = () => {
    setEducationData((prevData) => [...prevData, { degree: '', institution: '', year: '', cgpa: '' }]);
  };

  const handleRemoveEducation = (index) => {
    setEducationData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '20px' }}>
      <h2>Education</h2>
      {educationData.map((education, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <label>
            Name of the Degree:
            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </label>
          <br />
          <label>
            Name of the Institution:
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </label>
          <br />
          <label>
            Graduation Year:
            <input
              type="text"
              name="year"
              value={education.year}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </label>
          <br />
          <label>
            CGPA:
            <input
              type="text"
              name="cgpa"
              value={education.cgpa}
              onChange={(e) => handleEducationChange(index, e)}
            />
          </label>
          <br />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveEducation(index)}
              style={{ borderRadius: '6px', backgroundColor: '#9370DB', color: 'white', padding: '6px', cursor: 'pointer' }}
            >
              Remove
            </button>
          )}
          <hr style={{ display: index === educationData.length - 1 ? 'none' : 'block', width: '100%', margin: '5px 0' }} />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddEducation}
        style={{ borderRadius: '6px', backgroundColor: '#9370DB', color: 'white', padding: '8px', cursor: 'pointer' }}
      >
        + Add Education
      </button>
    </div>
  );
};

export default Education;


