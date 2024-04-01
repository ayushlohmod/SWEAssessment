



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NasaImage.css'; 

const NasaImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchNasaImage = async () => {
      const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=aekZTE0Foey245XRuEEcOLa9Ae1ejCNzoXSdig7d');
      const data = await response.json();
      setImageUrl(data.url);
    };

    fetchNasaImage();
  }, []);

  return (
    <div className="nasa-image-container">
      <div className="top-right">
        <Link to="/login" className="login-button">Login</Link>
      </div>
      <div className="nasa-content">
        <h1>NASA Image of the Day</h1>
        <img src={imageUrl} alt="NASA" className="nasa-image" />
      </div>
    </div>
  );
};

export default NasaImage;
