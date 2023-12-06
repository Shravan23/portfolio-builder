import React, { useState } from "react";
import { connect } from "react-redux";
import { createProject, changeDesign } from "./action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewProjectForm = ({ onCreatePressed,onChangeDesign }) => {
  const [projectData, setProjectData] = useState({
    project: "",
    descriptions: "",
    image: "",
    techStack: "",
    websiteLink: "",
    githubLink: "",
    date: "",
    guidedByProfessor: false,
    professorName: "", // New field for professor's name
    isClubProject: false, // New field for club project
    clubName: "", // New field for club name
    isSelfProject: false,
    selectedDesign:"design1"
  });
  const [selectedDesign, setSelectedDesign] = useState("design1"); 

  const handleDesignSelection = (design) => {
    setSelectedDesign(design);
    onChangeDesign(design);
    console.log(design);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Create a new project object and dispatch the action
    const newProject = { projects: projectData };
    onCreatePressed(newProject);

    // Clear the form fields
    setProjectData({
      project: "",
      descriptions: "",
      image: "",
      techStack: "",
      websiteLink: "",
      githubLink: "",
      date: "",
      guidedByProfessor: false,
      professorName: "", // New field for professor's name
      isClubProject: false, // New field for club project
      clubName: "", // New field for club name
      isSelfProject: false,
      selectedDesign:""
    });
  };

  return (
    <div className="border rounded p-3 m-2">
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="project"
        placeholder="Project Name"
        value={projectData.project}
        onChange={handleChange}
      />
      <textarea
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="descriptions"
        placeholder="Project Description"
        value={projectData.descriptions}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="image"
        placeholder="Project Image URL"
        value={projectData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="techStack"
        placeholder="Technology Stack"
        value={projectData.techStack}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="websiteLink"
        placeholder="Website Link"
        value={projectData.websiteLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="githubLink"
        placeholder="GitHub Link"
        value={projectData.githubLink}
        onChange={handleChange}
      />
      <input
        type="text"
        className="dark:bg-zinc-800 form-control form-control-sm mb-2 border py-1 px-2 rounded-sm text-sm capitalize outline-gray-200"
        name="date"
        placeholder="Project Timeline"
        value={projectData.date}
        onChange={handleChange}
      />

      <div className="text-right">
        <button
          className="btn btn-success btn-sm rounded-circle"
          onClick={handleSubmit}
          disabled={!projectData.project || !projectData.descriptions}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (project) => dispatch(createProject(project)),
  onChangeDesign:(projectDesign)=>dispatch(changeDesign(projectDesign))
});
export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm);