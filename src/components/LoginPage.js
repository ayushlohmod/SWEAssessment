

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  const handleGoogleLogin = () => {
    
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Please login with your Google account.</p>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
