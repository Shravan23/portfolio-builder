import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login'; // Import your Login page component
import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
import HomePage from './Components/Home/Home';
import './App.css';

import LogoutPage from './Components/Logout/Logout';
import SimpleForm from './UserDetails/SimpleForm';
import TemplatePage from './Template_Page/TemplatePage';


function App() {
  // const showHeader = location.pathname === '/' || location.pathname === '/login';
  return (
    <Router>
      <div className="App">
       <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SimpleForm" element={<SimpleForm />} />
          <Route path="/templatepage" element={<TemplatePage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;



