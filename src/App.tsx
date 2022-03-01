import React from 'react';
import './App.css';
import StartingPage from './pages/StartingPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<StartingPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
