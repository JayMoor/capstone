import React, {useState} from 'react';
import Navbar from './Navbar';
import CommentSection from './CommentSection';
import Rating from './Rating';
import AlbumInfo from './AlbumInfo';
import './Profile.css'


const AlbumPage = () => {
  const albumData = {
    album: 'Album Name',
    artist: 'Artist Name',
    producer: 'Producer Name',
  };

  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])

  const handleCommentChange=(event) => {
    setComment(event.target.value)
  }

  const hamdleAddComment = () => {
    if (comment.trim() !== ''){
      setComments((prevComments) => [...prevComments, comment]);
      setComment('')
    }
  }

  const handleSaveComments = () => {
    console.log('Save comments:, comments')
  }

  return (
    <div id="album-page">
      <AlbumInfo {...albumData} />
      <Rating />
      <CommentSection />
      <div>
        <h2>Add a Comment</h2>
        <textarea 
        value={comment}
        onChange={handleCommentChange}
        placeholder="comment here..."
        ></textarea>
        <br />
        <button onClick={hamdleAddComment}Add Comment></button>
        <div>
          <button onClick={handleSaveComments}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;