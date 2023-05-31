import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
// import ForgetPassword from './components/ForgetPassword';
// import NewSubmit from './components/NewSubmit';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/forget-pass" element={<ForgetPassword />} /> */}
          {/* <Route path="/otp" element={<NewSubmit />} /> */}
        </Routes>
      </Router>
      <ToastContainer autoClose={4000} />
    </div>
    
  );
}

export default App;