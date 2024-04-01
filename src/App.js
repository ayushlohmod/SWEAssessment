

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NasaImage from './components/NasaImage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="170558284817-s833602sa2j63rbr4g4gmojefqb51lci.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<NasaImage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
