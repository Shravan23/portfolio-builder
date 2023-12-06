import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Project = ({ project, onRemovePressed }) => {
  return (
    <div className="card dark:bg-lime-300 dark:text-black bg-light pb-1 pr-1 mb-1 small">
      <div className="text-end m-2">
        <button
          className="btn btn-danger btn-sm rounded-circle"
          onClick={() => onRemovePressed(project)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-2 col-3">Name:</div>
          <div className="col-xl-4 col-9">{project?.project}</div>
          <div className={`col-xl-2 col-3 ${project?.techStack ? "" : "d-none"}`}>Tech Stack:</div>
          <div className={`col-xl-4 col-9 ${project?.techStack ? "" : "d-none"}`}>{project?.techStack}</div>
        </div>
        <div className="row my-2">
          <div className="col-2">Description:</div>
          <div className="col-10">{project?.descriptions}</div>
        </div>
        <div className="row">
          <div className={`col-2 ${project?.websiteLink ? "" : "d-none"}`}>Website Link:</div>
          <div className={`col-4 ${project?.websiteLink ? "" : "d-none"}`}>{project?.websiteLink}</div>
          <div className={`col-2 ${project?.githubLink ? "" : "d-none"}`}>GitHub Link:</div>
          <div className={`col-4 ${project?.githubLink ? "" : "d-none"}`}>{project?.githubLink}</div>
        </div>
        <div className="row">
          <div className={`col-2 ${project?.date ? "" : "d-none"}`}>Date:</div>
          <div className={`col-4 ${project?.date ? "" : "d-none"}`}>{project?.date}</div>
          <div className={`col-2 ${project?.guidedByProfessor ? "" : "d-none"}`}>Guided by Professor:</div>
          <div className={`col-4 ${project?.guidedByProfessor ? "" : "d-none"}`}>
            {project?.guidedByProfessor ? "Yes" : "No"}
          </div>
        </div>
        {/* Professor's Name */}
        {project?.guidedByProfessor && (
          <div className="row">
            <div className="col-2">Professor's Name:</div>
            <div className="col-10">{project?.professorName}</div>
          </div>
        )}
        {/* Club Project */}
        {project?.isClubProject && (
          <div className="row">
            <div className="col-2">Club Project:</div>
            <div className="col-10">Yes</div>
          </div>
        )}
        {/* Club Name */}
        {project?.isClubProject && (
          <div className="row">
            <div className="col-2">Club Name:</div>
            <div className="col-10">{project?.clubName}</div>
          </div>
        )}
        {/* Self-Project */}
        {project?.isSelfProject && (
          <div className="row">
            <div className="col-2">Self-Project:</div>
            <div className="col-10">Yes</div>
          </div>
        )}
      </div>

    </div>
  );
};

export default Project;
