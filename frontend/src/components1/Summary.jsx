// Summary.js
import React from 'react';

const Summary = ({ summaryDetails, setSummaryDetails }) => {
  const handleSummaryChange = (e) => {
    setSummaryDetails(e.target.value);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Summary</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter summary details..."
        value={summaryDetails}
        onChange={handleSummaryChange}
      />
    </div>
  );
};

export default Summary;

