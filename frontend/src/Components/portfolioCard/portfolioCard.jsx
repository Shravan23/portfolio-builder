import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import he from "he";
import Form from "./Form";
import Code from "./Code";
import Preview from "./Preview";
import { Link, useNavigate, useLocation } from "react-router-dom";
import NavbarDesign2 from "./NavbarDesign2";
import NavbarDesign3 from "./NavbarDesign3";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import store from './store';

import { createInitialExperience } from "../Form/Experience/actions";
import {setInitialEducation} from "../Form/Education/actions";
import {createInitialProjects} from "../Form/Projects/action";


const PortfolioCard = ({
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
  selectedDesign,
  projects,
  addAllExperiences,
  addAllEducations,
  addAllProjects
}) => {
  const Navigate = useNavigate();


  const { state } = useLocation()
  console.log(state.resume)


  useEffect(()=>{
    addAllExperiences(state.resume.workExperiences)
    addAllEducations(state.resume.educations)
    addAllProjects(state.resume.projects)
  }, [])
 

  const data = {
    Dark: true,
    FormData: {
      FirstName: state?.resume.profile.name || "",
      LastName: "",
      Thubmnail: "",
      URL: state?.resume.profile.url || "",
      Description: state?.resume.profile.summary || "",
      Keywords: "",
      Address: state?.resume.profile.location || "",
      Phone: state?.resume.profile.phone || "",
      Email: state?.resume.profile.email || "",
      Colour: "#5538BC",
      Socials: {
        Facebook: "",
        WhatsApp: "",
        Instagram: "",
        Twitter: "",
        LinkedIn: state?.resume.profile.url || "",
        GitHub: "",
        StackOverflow: "",
      },
    },
    fileDownloadUrl: null,
    PreviewMode: false,
  };
  const [initialState, setInitialState] = useState(data);

  const handleChange = (e) => {
    Object.keys(data.FormData).includes(e.target.name)
      ? setInitialState((prevState) => {
        return {
          ...prevState,
          FormData: {
            ...initialState.FormData,
            [e.target.name]: e.target.value,
          },
          PreviewMode: false,
        };
      })
      : setInitialState((prevState) => {
        return {
          ...prevState,
          FormData: {
            ...initialState.FormData,
            Socials: {
              ...initialState.FormData.Socials,
              [e.target.name]: e.target.value,
            },
          },
          PreviewMode: false,
        };
      });
  };

  const clickHandler = async () => {
    Navigate("/main");
  };

  const download = async () => {
    try {
      let output = he.decode(
        document.getElementsByClassName("codefile")[0].innerHTML
      );
      console.log(JSON.stringify(initialState.FormData, null, 2));
      // console.log('Initial State:', store.getState());
      const blob = new Blob([output]);
      const fileDownloadUrl2 = URL.createObjectURL(blob);

      setInitialState((prevState) => {
        return {
          ...prevState,
          fileDownloadUrl: fileDownloadUrl2,
        };
      });

      const resolveAfter3Sec = new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );
      // Show a success toast and wait for it to close
      await toast.promise(resolveAfter3Sec, {
        pending: "Downloading...",
        success: "File downloaded successfully!",
        error: "An error occurred while downloading.",
        position: "top-right",
        autoClose: 3100, // Adjust the duration as needed
      });
    } catch (error) {
      // Handle any errors that occur during the download process
      console.error("Download error:", error);
    }
  };

  const [isExperienceEnabled, setIsExperienceEnabled] = useState(true);
  const [isSkillEnabled, setIsSkillEnabled] = useState(false);
  const [isEducationEnabled, setIsEducationEnabled] = useState(true);
  const [isInterestEnabled, setisInterestEnabled] = useState(false);
  const [isAwardsEnabled, setisAwardsEnabled] = useState(false);
  const [isProjectEnabled, setisProjectEnabled] = useState(true);

  const toggleExperience = () => {
    setIsExperienceEnabled(!isExperienceEnabled);
  };

  const toggleEducation = () => {
    setIsEducationEnabled(!isEducationEnabled);
  };
  const toggleSkill = () => {
    setIsSkillEnabled(!isSkillEnabled);
  };
  const toggleInterest = () => {
    setisInterestEnabled(!isInterestEnabled);
  };
  const toggleAward = () => {
    setisAwardsEnabled(!isAwardsEnabled);
  };
  const toggleProject = () => {
    setisProjectEnabled(!isProjectEnabled);
  };

  const [navbarDesign, setNavbarDesign] = useState("NavbarDesign2");

  const handleDesignChange = (design) => {
    setNavbarDesign(design);
  };

  const handleUploadResume = () => {
    if (localStorage.getItem('token')) {
      Navigate('/resumeUploadPage')
    } else {
      Navigate('/resumeUploadPage2')
    }

  }

  let selectedNavbarDesign;
  switch (navbarDesign) {
    case "NavbarDesign2":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign2
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    case "NavbarDesign3":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign3
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    default:
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign2
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
  }

  let projectSection = `
  <!-- Projects -->
  <section class="resume-section" id="projects">
    <div class="container-fluid p-2">
      <h2 class="mb-5 text-black">${projectsTitle}</h2>
      ${projects
        .map(
          (project) => `
        <div class="project-card mb-5 border-[1px] borer-solid overflow-hidden flex flex-col">
          <div class="project-top max-w-[100%] object-contain m-[10px] min-h-[150px] ">
            <img class="max-w-[100%] object-contain m-[10px] min-h-[150px] ${project?.projects?.image ? "" : "d-none"}" src="${project?.projects?.image}" alt="${
            project?.projects?.project
          }" class="img-fluid">
          </div>
          <div class="project-bottom p-3  mt-[10px] mb-[10px] text-[1.8rem] bg-primary bg-[#0074d9] text-white p-[20px] relative ">
            <div class="project-details">
              <h3 class="text-white mx-0 mt-[10px] text-[1.8rem]">${project?.projects?.project}</h3>
              <p class="tech-stack mt-[10px] mb-0 text-white  ${project?.projects?.techStack ? "" : "d-none"}"><strong>Technology Stack: </strong>${
                project?.projects?.techStack
              }</p>
              <p class="description mt-10px mb-2 text-white">${
                project?.projects?.descriptions
              }</p>
              <div class="project-info">
                <div class="mb-3 text-white ${project?.projects?.guidedByProfessor ? "" : "d-none"}"><strong>Guided by Professor: </strong>${
                  project?.projects?.guidedByProfessor ? "Yes" : "No"
                }</div>
                ${
                  project?.projects?.professorName
                    ? `
                  <div class="mb-3 text-white"><strong>Professor's Name: </strong>${project?.projects?.professorName}</div>
                `
                    : ""
                }
                <div class="mb-3 text-white ${project?.projects?.isClubProject ? "" : "d-none"}"><strong>Club Project: </strong>${
                  project?.projects?.isClubProject ? "Yes" : "No"
                }</div>
                ${
                  project?.projects?.clubName
                    ? `
                  <div class="mb-3 text-white ${project?.projects?.clubName ? "" : "d-none"}"><strong>Club Name: </strong>${project?.projects?.clubName}</div>
                `
                    : ""
                }
                <div class="mb-3 text-white ${project?.projects?.isSelfProject ? "" : "d-none"}"><strong>Self-Project: </strong>${
                  project?.projects?.isSelfProject ? "Yes" : "No"
                }</div>
                <div class="date mb-10 mr-10 absolute text-white"><strong>Date: </strong>${
                  project?.projects?.date
                }</div>
                <div class="dropdown dropup text-white">
                  <button class="btn btn-secondary dropdown-toggle  ${project?.projects?.websiteLink ? "" : "d-none"}" type="button" id="projectLinks" data-bs-toggle="dropdown" data-bs-placement="top" aria-expanded="false">
                    Links
                  </button>
                  <ul class= {dropdown-menu${project?.project?.websiteLink ? "" : "d-none"}} aria-labelledby="projectLinks">
                    ${
                      project?.project?.websiteLink
                        ? `
                      <li><a class="dropdown-item${project?.project?.websiteLink ? "" : "d-none"}" href="${project?.projects?.websiteLink}" target="_blank">Visit Website</a></li>
                    `
                        : ""
                    }
                    ${
                      project?.projects?.githubLink
                        ? `
                      <li><a class="dropdown-item" href="${project?.projects?.githubLink}" target="_blank">GitHub Repository</a></li>
                    `
                        : ""
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join("\n")}
    </div>
  </section>
  <hr class="m-0" />
`;
  const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: 'flex-start',
    marginTop: "80px",
  };



  return (
    <div className="App w-full overflow-y-scroll  dark:bg-black dark:text-white">
      <div style={containerStyle}>
        <button
          style={{
            ...buttonStyle,
            background:
              navbarDesign === "NavbarDesign2" ? "#5858dc" : "white",
            color: navbarDesign === "NavbarDesign2" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign2")}
        >
          Template 1
        </button>
        <button
          style={{
            ...buttonStyle,
            background:
              navbarDesign === "NavbarDesign3" ? "lightgreen" : "white",
            color: navbarDesign === "NavbarDesign3" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign3")}
        >
          Template 2
        </button>
        <button
          style={{...buttonStyle, background:'rgb(42 129 58)', color: 'white'}}
          onClick={handleUploadResume}
        >
          Upload Resume
        </button>
      </div>
      <div className="w-full pl-12 my-1">
        <div className="flex flex-row">
          <div className="p-3 w-1/2">
            <Form
              FormData={{
                FullName: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
                ...initialState.FormData,
              }}
              initialData={initialState.FormData}
              onChange={handleChange}
              isEducationEnabled={isEducationEnabled}
              isExperienceEnabled={isExperienceEnabled}
              isSkillEnabled={isSkillEnabled}
              isInterestEnabled={isInterestEnabled}
              isAwardsEnabled={isAwardsEnabled}
              isProjectEnabled={isProjectEnabled}
              toggleExperience={toggleExperience}
              toggleEducation={toggleEducation}
              toggleSkill={toggleSkill}
              toggleInterest={toggleInterest}
              toggleAward={toggleAward}
              toggleProject={toggleProject}
            />
            <a
              className="text-xl cursor-pointer"
              download={"portfolio.html"}
              href={initialState.fileDownloadUrl}
            >
              <button
                className={`btn btn-${initialState.Dark ? "success" : "primary"
                  } bg-green-700 text-white mx-2 p-3`}
                onClick={() => {
                  download();
                }}
                download={"portfolio.html"}
                href={initialState.fileDownloadUrl}
                disabled={initialState.PreviewMode}
                title="Go to the Code View to download."
                style={{marginTop:'25px'}}
              >
                Download
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme={initialState.Dark ? "dark" : "light"}
              />
            </a>
          </div>
          <div className="p-3 w-1/2">
            <ul className="flex">
              <li className="mr-2">
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${!initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: false,
                      };
                    });
                  }}
                >
                  Code
                </span>
              </li>
              <li>
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: true,
                      };
                    });
                  }}
                >
                  Preview
                </span>
              </li>
            </ul>
            {initialState.PreviewMode ? (
              <Preview
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isInterestEnabled={isInterestEnabled}
                Navbar={selectedNavbarDesign}
                Projectdesign={projectSection}
              />
            ) : (
              <Code
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isInterestEnabled={isInterestEnabled}
                isProjectEnabled={isProjectEnabled}
                Navbar={selectedNavbarDesign}
                Projectdesign={projectSection}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAllExperiences: (exp) => {
   exp = exp.map((item) => {
      return {experience : item}
    })
    dispatch(createInitialExperience(exp))
  },

  addAllEducations : (edu) => {
    edu = edu.map((item) => {
      return {education : item}
    })
    dispatch(setInitialEducation(edu))
  },

  addAllProjects : (projects) => {
    projects = projects.map((item) => {
      return {projects : item}
    })
    dispatch(createInitialProjects(projects))
  }

});

const mapStateToProps = (state) => ({
  experiences: state.experiences,
  educations: state.educations,
  awards: state.awards,
  interests: state.interests,
  skills: state.skills.selectedSkills,
  experienceTitle: state.title.experienceTitle,
  skillsTitle: state.title.skillsTitle,
  interestsTitle: state.title.interestsTitle,
  awardsTitle: state.title.awardsTitle,
  educationTitle: state.title.educationTitle,
  projectsTitle: state.title.projectsTitle,
  selectedDesign: state.projects.selectedDesign,
  projects : state.projects,
  // projects: state.projects.items.map((projectObj) => projectObj.project)
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioCard);