//WorkExperiencePage.jsx
import React from 'react';
import WorkExperience from './WorkExperience';
import SkillsAndCertifications from './SkillsAndCertifications';

const WorkExperiencePage = ({
  workExperienceData,
  skills,
  certifications,
  onWorkExperienceChange,
  onSkillsChange,
  onCertificationsChange,
}) => {
  return (
    <div>
      <WorkExperience workExperienceData={workExperienceData} setWorkExperienceData={onWorkExperienceChange} />
      <SkillsAndCertifications
        skills={skills}
        setSkills={onSkillsChange}
        certifications={certifications}
        setCertifications={onCertificationsChange}
      />
    </div>
  );
};

export default WorkExperiencePage;
