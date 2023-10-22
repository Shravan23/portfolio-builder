// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from './Components/Login/Login';
// import SignUp from './Components/SignUp/SignUp';
// import Header from './Components/Header/Header';

// function App() {
//   return (
//     <div>
//      <Login />
//      <SignUp />
//      </div>
//   );
// }

// export default App;

// function App() {
//   const [activePage, setActivePage] = useState("Login");

//   return (
//     <div className="App">
//       <Header activePage={activePage} setActivePage={setActivePage} />
//       <div className="content">
//         {activePage === "Login" && <Login />}
//         {activePage === "Signup" && <SignUp />}
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login'; // Import your Login page component
import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



