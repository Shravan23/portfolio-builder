// PersonalDetailsPage.js
import React from 'react';
import Contact from './Contact';
import Summary from './Summary';
import Education from './Education';

const PersonalDetailsPage = ({ formData, summaryDetails, educationData, onInputChange, onSummaryChange, onEducationChange }) => {
  return (
    <div style={{ marginRight: '900px', marginTop: '20px' }}>
      <Contact formData={formData} handleInputChange={onInputChange} />
      <Summary summaryDetails={summaryDetails} setSummaryDetails={onSummaryChange} />
      <Education educationData={educationData} setEducationData={onEducationChange} />
    </div>
  );
};

export default PersonalDetailsPage;
