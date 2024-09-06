// src/NextPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NextPage.css";
const NextPage = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Welcome to IntelliLearn</h1>
      <button onClick={handleNavigateToDashboard}>Go to Student Dashboard</button>
    </div>
  );
};

export default NextPage;
