import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  experiences  from "../Components/Form/Experience/reducers"
import { titlesReducer } from '../Components/Form/Experience/reducers';
import  educations  from "../Components/Form/Education/reducers";
import  awards  from "../Components/Form/Awards/reducers";
import  interests  from "../Components/Form/Interests/reducers";
import  skills  from "../Components/Form/Skills/reducers";
import projects from '../Components/Form/Projects/reducer';

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

export default store;