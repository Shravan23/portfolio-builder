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

// Layout component with the header
const HeaderLayout = ({ children }) => (
  <>
    <Header />
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
              {/* Header layout for routes that need the header */}
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
              {/* Routes without the header */}
              <Route path="/portfolioCard" element={<HeaderLayout>{<PortfolioCard />}</HeaderLayout>} />
              <Route
                path="/resumeUploadPage"
                element={<HeaderLayout>{<ResumeUploadPage />}</HeaderLayout>}
              />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </Router>
      </AuthState>
    </Provider>
  );
}

export default App;
