import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login'; // Import your Login page component
import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
import HomePage from './Components/Home/Home';
import './App.css';
import store from './redux/store'
import AuthState from "./context/auth/AuthState";

import LogoutPage from './Components/Logout/Logout';
import SimpleForm from './UserDetails/SimpleForm';
import TemplatePage from './Template_Page/TemplatePage';
import PortfolioCard from "./Components/portfolioCard";


function App() {
  
  return (
    <Provider store={store}>
    <AuthState>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/SimpleForm" element={<SimpleForm />} />
          <Route path="/templatepage" element={<TemplatePage />} /> 
          <Route path="/" element={<PortfolioCard/>}/>  
        </Routes>
      </div>
    </Router>
    </AuthState>
    </Provider>
  );
}

export default App;



