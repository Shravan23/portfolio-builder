// TemplatePage.jsx

import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const TemplatePage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);

  const getTemplatePath = () => {
    return `/template${selectedTemplate}/template${selectedTemplate}.html`;
  };

  const handleTemplateChange = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };

  const handleDownload = async () => {
    // Construct the URL for the zip file
    const zipFileUrl = `${process.env.PUBLIC_URL}/template${selectedTemplate}.zip`;

    // Download the zip file
    saveAs(zipFileUrl, `template${selectedTemplate}.zip`);
  };

  return (
    <div>
      <iframe
        src={process.env.PUBLIC_URL + getTemplatePath()}
        title={`Template ${selectedTemplate}`}
        width="100%"
        height="600px"
        style={{ border: '1px solid #ccc' }}
      ></iframe>
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <button onClick={() => handleTemplateChange(1)} style={{ marginRight: '10px' }}>Template 1</button>
        <button onClick={() => handleTemplateChange(2)} style={{ marginRight: '10px' }}>Template 2</button>
      </div>
      <button onClick={handleDownload}>Download Template</button>
    </div>
  );
};

export default TemplatePage;
