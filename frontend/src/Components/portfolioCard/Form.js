import FormGroup from "../Bootstrap/FormGroup";
import SocialMedia from "../Bootstrap/SocialMedia";
import AwardList from "../Form/Awards/AwardList";
import EducationList from "../Form/Education/EducationList";
import ExperienceList from "../Form/Experience/ExperienceList";
import InterestList from "../Form/Interests/InterestList";
import ProjectList from "../Form/Projects/ProjectList";
import SkillsList from "../Form/Skills/SkillsList";
import { SectionTitle } from "./sectionTitle/sectionTitle";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Form = ({ FormData, onChange, isExperienceEnabled, isEducationEnabled, isSkillEnabled, isInterestEnabled, isAwardsEnabled,
  isProjectEnabled,toggleProject,toggleExperience,toggleEducation,toggleSkill,toggleInterest,toggleAward }) => {
  const Desc = {
    FirstName: [
      "text",
      "First Name",
    ],
    LastName: ["text", "Last Name",],
    Description: ["text", "Summary",],
    Address: [
      "text",
      "City Name",
    ],
    Phone: [
      "text",
      "Phone Number",
    ],
    Email: ["text", "Email Address",],
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio",
    ],

    Socials: {
      LinkedIn: [
        "text",
        "LinkedIn ID",
      ],
      GitHub: [
        "text",
        "GitHub Username",
      ],
    },
  };

  const getBorderColor = (fd) => {
    if (FormData[fd].length != 0 && fd !== "Colour") {
      //changed the code here to neglect the theme color section filled
      return "border-lime-500"; // Green color for filled section
    }
    return ""; // No special border color for unfilled section
  };
  return (
    <div className="Form">
      <h1 className="text-xl mb-2 font-bold">Basic Info</h1>
      {Object.keys(FormData).map((fd) =>
        fd !== "Socials" ? (
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              borderColor={getBorderColor(fd)}
            />
          )
        ) : (
          <SocialMedia
            MediaData={Desc[fd]}
            value={FormData[fd]}
            onChange={fd === "FullName" ? () => {} : onChange}
          />
        )
      )}
       <div>
        {isExperienceEnabled ? (
          <>
            <SectionTitle initialTitle="Experience" titleType="experience"/>
            <ExperienceList />
          </>
        ) : (
          <p>Experience section is disabled.</p>
        )}
        
        <button onClick={toggleExperience}>
          {isExperienceEnabled ? 'Remove' : 'Add'} Experience
        </button>
      </div>

      <div>
        {isEducationEnabled ? (
          <>
            <SectionTitle initialTitle="Education" titleType='education'/>
            <EducationList />
          </>
        ) : (
          <p>Education section is disabled.</p>
        )}
        <button onClick={toggleEducation}>
          {isEducationEnabled ? 'Remove' : 'Add'} Education
        </button>
      </div>
      
      <div>
      {isSkillEnabled ? (
          <>
            <SectionTitle initialTitle="Skills" titleType="skills"/>
            <SkillsList />
          </>
        ) : (
          <p>Skills section is disabled.</p>
        )}
        <button onClick={toggleSkill}>
          {isSkillEnabled ? 'Remove' : 'Add'} Skills
        </button>
      </div>

      <div>
      {isInterestEnabled ? (
          <>
           <SectionTitle initialTitle="Interests" titleType="interests"/>
           <InterestList />
          </>
        ) : (
          <p>Interest section is disabled.</p>
        )}
        <button onClick={toggleInterest}>
          {isInterestEnabled ? 'Remove' : 'Add'} Interest
        </button>
      </div>

      <div>
      {isAwardsEnabled ? (
          <>
           <SectionTitle initialTitle="Awards" titleType="awards"/>
           <AwardList />
          </>
        ) : (
          <p>Awards section is disabled.</p>
        )}
        <button onClick={toggleAward}>
          {isAwardsEnabled ? 'Remove' : 'Add'} Awards
        </button>
      </div>
      <div>
      {isProjectEnabled ? (
          <>
           <SectionTitle initialTitle="Projects" titleType="projects"/>
           <ProjectList />
          </>
        ) : (
          <p>Projects section is disabled.</p>
        )}
        <button onClick={toggleProject}>
          {isProjectEnabled ? 'Remove' : 'Add'} Projects
        </button>
      </div>
    </div>
  );
};

export default Form;
