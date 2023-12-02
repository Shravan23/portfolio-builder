// PersonalDetailsPage.jsx
import React from 'react';
import './Personaldetails.css'; // Import the main styles

const PersonalDetailsPage = ({ formData, summaryDetails, educationData, onInputChange, onSummaryChange, onEducationChange }) => {
  const handleSummaryChange = (e) => {
    onSummaryChange(e.target.value);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    onEducationChange((prevData) => {
      const newData = [...prevData];
      newData[index][name] = value;
      return newData;
    });
  };

  const handleAddEducation = () => {
    onEducationChange((prevData) => [...prevData, { degree: '', institution: '', year: '', cgpa: '' }]);
  };

  const handleRemoveEducation = (index) => {
    onEducationChange((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  const handleInputChange = (e) => {
    onInputChange({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="personal-details-container">
      <div className="contact-container">
        <h3>Personal Details</h3>
        <label className="contact-label">
          First Name: 
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="contact-label">
          Last Name: 
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br /> 
        <label className="contact-label">
          Email: 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="contact-label">
          Phone Number: 
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <br /> 
        <label className="contact-label">
          Address Line 1: 
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
          />
        </label>
        <br /> 
        <label className="contact-label">
          City: 
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
         <br />
        <label className="contact-label">
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="contact-label">
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </label>
        <br />
      </div>

      <div className="summary-container">
        <h2>Summary</h2>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter summary details..."
          value={summaryDetails}
          onChange={handleSummaryChange}
        />
      </div>

      <div className="education-container">
        <h2>Education</h2>
        {educationData.map((education, index) => (
          <div key={index} className="education-item">
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
                className="education-label"
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
          className="add-education-button"
        >
          + Add Education
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsPage;
