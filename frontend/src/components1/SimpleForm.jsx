// SimpleForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this line
import ResumeUpload from './ResumeUpload';
import PersonalDetailsPage from './PersonalDetailsPage';
import WorkExperiencePage from './WorkExperiencePage';
import OtherDetailsPage from './OtherDetailsPage';

function SimpleForm() {
  const navigate = useNavigate(); // Add this line
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [summaryDetails, setSummaryDetails] = useState('');
  const [educationData, setEducationData] = useState([{}]);
  const [workExperienceData, setWorkExperienceData] = useState([
    { title: '', company: '', location: '', duration: '', roles: '' },
  ]);
  const [skills, setSkills] = useState('');
  const [certifications, setCertifications] = useState(['']);
  const [images, setImages] = useState([]);
  const [projectsData, setProjectsData] = useState([{}]);
  const [linksData, setLinksData] = useState(['']);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = () => {
    // Add your submission logic here, for example, send data to a server
    console.log('Form submitted!');
  };

  const handleResumeSubmit = (resumeFile) => {
    // Perform any necessary actions with the uploaded resume file
    console.log('Resume submitted:', resumeFile);

    // Move to the next page
    setCurrentPage(currentPage + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <ResumeUpload onSubmit={handleResumeSubmit} />;
      case 2:
        return (
          <PersonalDetailsPage
            formData={formData}
            summaryDetails={summaryDetails}
            educationData={educationData}
            onInputChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            onSummaryChange={(e) => setSummaryDetails(e.target.value)}
            onEducationChange={(data) => setEducationData(data)}
          />
        );
      case 3:
        return (
          <WorkExperiencePage
            workExperienceData={workExperienceData}
            skills={skills}
            certifications={certifications}
            onWorkExperienceChange={(data) => setWorkExperienceData(data)}
            onSkillsChange={(e) => setSkills(e.target.value)}
            onCertificationsChange={(data) => setCertifications(data)}
          />
        );
      case 4:
        return (
          <OtherDetailsPage
            images={images}
            projectsData={projectsData}
            linksData={linksData}
            onImagesChange={(data) => setImages(data)}
            onProjectsChange={(data) => setProjectsData(data)}
            onLinksChange={(data) => setLinksData(data)}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderPage()}
      {currentPage > 1 && <button onClick={handlePrevious}>Previous</button>}
      {currentPage < 4 && <button onClick={handleNext}>Next</button>}
      {currentPage === 4 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
}

export default SimpleForm;
