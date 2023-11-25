import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
// import Header from './Components/Header/Header';
// import LoginPage from './Components/Login/Login'; // Import your Login page component
// import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
=======
import Header from './Components/Header/Header';
import LoginPage from './Components/Login/Login'; // Import your Login page component
import SignupPage from './Components/SignUp/SignUp'; // Import your Signup page component
import HomePage from './Components/Home/Home';
>>>>>>> 612bd4cc0f9d67d125228c6cc3887f1bb244f39f
import './App.css';
import LogoutPage from './Components/Logout/Logout'

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
<<<<<<< HEAD
        <LogoutPage />
=======
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
>>>>>>> 612bd4cc0f9d67d125228c6cc3887f1bb244f39f
      </div>
    </Router>
  );
}

export default App;



