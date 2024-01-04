import React from 'react';
import MediaCard from './Display';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Homepage = () => {

  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Fetch list of users
        axios.get('http://localhost:3001/api/album')
        .then(response => setAlbums(response.data))
        .catch(error => console.error('Error fetching albums:', error));
    // Fetch current reviews
  }, []);
  
    return (
      <div>
        <div>
            <h1>
                Haromize 
            </h1>
        </div>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center' }}>
          {albums.map((album, index) => (
            <MediaCard key={index} album={album} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Homepage;