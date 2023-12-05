import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import  experiences  from "../Form/Experience/reducers"
import { titlesReducer } from '../Form/Experience/reducers';
import  educations  from "../Form/Education/reducers";
import  awards  from "../Form/Awards/reducers";
import  interests  from "../Form/Interests/reducers";
import  skills  from "../Form/Skills/reducers";
import projects from '../Form/Projects/reducer';
import React, { useEffect } from 'react';


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