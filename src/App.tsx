import React from 'react';
import './App.css';
import StartingPage from './pages/StartingPage';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/' element={<StartingPage/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
