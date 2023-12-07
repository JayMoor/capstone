import React from 'react';
import Navbar from './Navbar';
import CommentSection from './CommentSection';
import HoverRating from './Rating';
import AlbumInfo from './AlbumInfo';
import './Profile.css'


const AlbumPage = () => {
  const albumData = {
    album: 'Album Name',
    artist: 'Artist Name',
    producer: 'Producer Name',
  };

  return (
    <div id="album-page">
      
      <AlbumInfo {...albumData} />
      <HoverRating />
      <CommentSection />
    </div>
  );
};

export default AlbumPage;