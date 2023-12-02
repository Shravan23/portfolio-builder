//WorkExperience.jsx
import React, { useState } from 'react';

const WorkExperience = ({ workExperienceData, setWorkExperienceData }) => {
  const handleWorkExperienceChange = (index, e) => {
    const { name, value } = e.target;
    setWorkExperienceData((prevData) => {
      const newData = [...prevData];
      newData[index][name] = name === 'duration' ? value.split(' to ') : value;
      return newData;
    });
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceData((prevData) => [
      ...prevData,
      { title: '', company: '', location: '', duration: { start: '', end: '' }, roles: '' },
    ]);
  };

  const handleRemoveWorkExperience = (index) => {
    setWorkExperienceData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div className='Workexperience-container'>
      <h2>Work Experience</h2>
      {workExperienceData.map((experience, index) => (
        <div key={index}>
          <label>
            Position Title:
            <input
              type="text"
              name="title"
              value={experience.title}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
          </label>
          <br />
          <label>
            Name of the Company:
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={experience.location}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
          </label>
          <br />
          <label>
            Duration:
            <input
              type="text"
              placeholder="Start Date (mm/dd/yyyy)"
              value={experience.duration ? experience.duration.start : ''}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
            {' to '}
            <input
              type="text"
              placeholder="End Date (mm/dd/yyyy)"
              value={experience.duration ? experience.duration.end : ''}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
          </label>
          <br />
          <label>
            Roles and Responsibilities:
            <textarea
              rows="4"
              cols="50"
              value={experience.roles}
              onChange={(e) => handleWorkExperienceChange(index, e)}
            />
          </label>
          <br />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveWorkExperience(index)}
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
        onClick={handleAddWorkExperience}
        style={{
          borderRadius: '6px',
          backgroundColor: '#7349c2',
          color: 'white',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        + Add Work Experience
      </button>
    </div>
  );
};

export default WorkExperience;
