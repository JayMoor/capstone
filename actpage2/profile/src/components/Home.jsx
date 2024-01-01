import React from 'react';
import MediaCard from './Display';





const Homepage = () => {
    const albums = [
      { title: 'Album 1',},
      { title: 'Album 2',},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
      { title: 'Album 3,'},
    
    ];
  
    return (
      <div>
        <div >
            <h1>
                Haromize 
            </h1>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', justifyContent: 'space-evenly' }}>
          {albums.map((album, index) => (
            <MediaCard key={index} album={album} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Homepage;