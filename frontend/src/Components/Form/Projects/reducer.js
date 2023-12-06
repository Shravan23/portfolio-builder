import { CREATE_PROJECT, SET_INITIAL_PROJECTS, REMOVE_PROJECT,CHANGE_DESIGN } from "./action";

const projects = (state=[], action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INITIAL_PROJECTS:
      const { projects } = payload;
      return projects;

    case CREATE_PROJECT: {
      const { project } = payload;
   
      return state.concat(project)
    }
    case REMOVE_PROJECT: {
      const { project } = payload;
      console.log(project, state)
      return state.filter(obj => obj.projects.project !== project.project);
    }
    case CHANGE_DESIGN: {
      const { projectDesign } = payload;
      return {
        ...state,
        selectedDesign: projectDesign,
      };
    }

    default:
      return state;
  }
};

export default projects;
