import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login'; // Import your Login page component
import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
import HomePage from './Components/Home/Home';
import './App.css';
import LogoutPage from './Components/Logout/Logout'
import SimpleForm from './components1/SimpleForm'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/" element={<LoginPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">

        {/* <LogoutPage /> */}

        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SimpleForm" element={<SimpleForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



