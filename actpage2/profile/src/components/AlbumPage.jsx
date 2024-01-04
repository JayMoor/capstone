import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import MediaCard from './Display';
import './Profile.css'


const AlbumPage = () => {

  const [yourRatings, setYourRatings] = useState([]);
  const [album, setAlbum] = useState({});

  const selectedAlbum = useParams().selectedAlbum;

  // get the album data from the database
  useEffect(() => {
    axios.get(`http://localhost:3001/api/album/${selectedAlbum}`)
    .then(response => setAlbum(response.data))
    .catch(error => console.error('Error fetching albums:', error));
  }, []);

  // get the user's ratings for the album
  useEffect(() => {
    axios.get(`http://localhost:3001/api/reviews`)
    // filter repsonse.date by album name (from album state)
    // TODO filter by user id
    .then(response => setYourRatings(response.data.filter((rating) => rating.album === album.name)))
    .catch(error => console.error('Error fetching albums:', error));
  }, [album]);


  const handleSaveComments = () => {
    console.log('Save comments:, comments')
  }

  return (
    <div id="album-page">
      <MediaCard album={album} />
      <CommentSection reviews={yourRatings} />
    </div>
  );
};

export default AlbumPage;