// src/NextPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NextPage = () => {
  const navigate = useNavigate();

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Welcome to Intellilearn</h1>
      <button onClick={handleNavigateToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default NextPage;
