import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  experiences  from "../Form/Experience/reducers"
import { titlesReducer } from '../Form/Experience/reducers';
import  educations  from "../Form/Education/reducers";
import  awards  from "../Form/Awards/reducers";
import  interests  from "../Form/Interests/reducers";
import  skills  from "../Form/Skills/reducers";
import projects from '../Form/Projects/reducer';

const allreducers = {
    experiences:experiences,
    educations:educations,
    awards:awards,
    interests:interests,
    skills:skills,
    projects: projects,
    title : titlesReducer
};

const rootReducer = combineReducers(allreducers);

const store=configureStore({reducer: rootReducer});
const autoFillFormData = () => {
    if (initialData && Object.keys(initialData).length > 0) {
      onChange({ target: { name: "LastName", value: state.resume.profile.name || "" } });
      onChange({ target: { name: "Description", value: state.resume.profile.summary || "" } });
      onChange({ target: { name: "Email", value: state.resume.profile.email || "" } });
      onChange({ target: { name: "Phone", value: state.resume.profile.phone || "" } });
      onChange({ target: { name: "Address", value: state.resume.profile.location || "" } });
      // onChange({ target: { name: "Socials", value: state.resume.profile.url || "" } });
    }
  };

  useEffect(() => {
    autoFillFormData();
  }, []); // Run once when the component mounts
export default store;