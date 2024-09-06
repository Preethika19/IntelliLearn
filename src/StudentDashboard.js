// src/StudentDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StudentDashboard.css'; // Optional: Create a CSS file for styling

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>My Profile</h2>
          <p>View and edit your personal information.</p>
          <Link to="/profile">Go to Profile</Link>
        </div>
        <div className="dashboard-card">
          <h2>My Courses</h2>
          <p>Check out the courses you're enrolled in.</p>
          <Link to="/courses">View Courses</Link>
        </div>
        <div className="dashboard-card">
          <h2>Study Materials</h2>
          <p>Access your study materials and resources.</p>
          <Link to="/materials">View Materials</Link>
        </div>
        <div className="dashboard-card">
          <h2>Tests</h2>
          <p>View and manage your tests.</p>
          <Link to="/tests">View Tests</Link>
        </div>
        <div className="dashboard-card">
          <h2>Settings</h2>
          <p>Update your account settings.</p>
          <Link to="/settings">Go to Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
