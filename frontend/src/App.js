import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login';
import SignupPage from './Components/SignUp/SignUp';
import HomePage from './Components/Home/Home';
import './App.css';
import store from './redux/store';
import AuthState from './context/auth/AuthState';
import LogoutPage from './Components/Logout/Logout';
import PortfolioCard from './Components/portfolioCard'; // Assuming you have a PortfolioCard component
import ResumeUploadPage from './UploadResume/ResumeUploadPage'; // New ResumeUploadPage component
import LogoutH from './Components/Header/LogoutH';

const HeaderLayout = ({ children, useLogoutHeader }) => (
  <>
    {useLogoutHeader ? <LogoutH /> : <Header />}
    {children}
  </>
);

function App() {
  return (
    <Provider store={store}>
      <AuthState>
       
        <Router>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={<HeaderLayout>{<HomePage />}</HeaderLayout>}
              />
              <Route
                path="/login"
                element={<HeaderLayout>{<LoginPage />}</HeaderLayout>}
              />
              <Route
                path="/signup"
                element={<HeaderLayout>{<SignupPage />}</HeaderLayout>}
              />
              <Route
                path="/portfolioCard"
                element={<HeaderLayout useLogoutHeader>{<PortfolioCard />}</HeaderLayout>}
              />
              <Route
                path="/resumeUploadPage"
                element={<HeaderLayout useLogoutHeader>{<ResumeUploadPage />}</HeaderLayout>}
              />
            </Routes>
          </div>
        </Router>
      </AuthState>
    </Provider>
  );
}

export default App;
