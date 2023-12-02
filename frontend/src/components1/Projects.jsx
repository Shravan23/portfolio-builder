//Projects.jsx
import React, { useState } from 'react';

const Projects = ({ projectsData, setProjectsData }) => {
  const handleProjectChange = (index, field, value) => {
    setProjectsData((prevData) => {
      const newData = [...prevData];
      newData[index][field] = value;
      return newData;
    });
  };

  const handleAddProject = () => {
    setProjectsData((prevData) => [
      ...prevData,
      { name: '', description: '', duration: { start: '', end: '' }, summary: '' },
    ]);
  };

  const handleRemoveProject = (index) => {
    setProjectsData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <div style={{ marginTop: '20px', fontSize: '20px' }}>
      <h2>Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index}>
          <label>
            Name of the Project:
            <input
              type="text"
              value={project.name}
              onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              rows="2"
              cols="50"
              value={project.description}
              onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
            />
          </label>
          <br />
          <label>
            Duration:
            <input
              type="text"
              placeholder="Start Date (mm/dd/yyyy)"
              value={project.duration ? project.duration.start : ''}
              onChange={(e) => handleProjectChange(index, 'duration', { ...project.duration, start: e.target.value })}
            />
            {' to '}
            <input
              type="text"
              placeholder="End Date (mm/dd/yyyy)"
              value={project.duration ? project.duration.end : ''}
              onChange={(e) => handleProjectChange(index, 'duration', { ...project.duration, end: e.target.value })}
            />
          </label>
          <br />
          <label>
            Summary:
            <textarea
              rows="4"
              cols="50"
              value={project.summary}
              onChange={(e) => handleProjectChange(index, 'summary', e.target.value)}
            />
          </label>
          <br />
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveProject(index)}
              style={{
                borderRadius: '6px',
                backgroundColor: '#9370DB',
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
        onClick={handleAddProject}
        style={{
          borderRadius: '6px',
          backgroundColor: '#9370DB',
          color: 'white',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        + Add Project
      </button>
    </div>
  );
};

export default Projects;
