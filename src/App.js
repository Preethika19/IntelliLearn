// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentLogin from './StudentLogin';
import NextPage from './NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/" element={<StudentLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
