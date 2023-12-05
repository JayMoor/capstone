
// src/App.jsx
import React from 'react';
import './App.css';

// Album component
const Album = ({ title, description, imageUrl }) => (
  <article>
    <h2>{title}</h2>
    <img src={imageUrl} alt={title} />
    <p>{description}</p>
  </article>
);

function App() {
  const albums = [
    {
      title: 'Album Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
      imageUrl: 'url_to_your_image_1.jpg',
    },
    {
      title: 'Album Title 2',
      description: 'Proin nec ex vel ante convallis vestibulum et eget elit...',
      imageUrl: 'url_to_your_image_2.jpg',
    },
    // Add more albums as needed
  ];

  return (
    <div>
      <header>
        <h1>Harmonize</h1>
      </header>

      <section>
        {albums.map((album, index) => (
          <Album key={index} {...album} />
        ))}
      </section>

      <footer>
        <p>&copy; Dummy Stuff </p>
      </footer>
    </div>
  );
}

export default App;

