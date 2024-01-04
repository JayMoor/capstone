// import React, {useState} from 'react';
// import Navbar from './Navbar';
// import CommentSection from './CommentSection';
// import Rating from './Rating';
// import AlbumInfo from './AlbumInfo';
// import './Profile.css'


// const AddAlbum = () => {
//   const initialAlbumData = {
//     album: 'Album Name',
//     artist: 'Artist Name',
//     producer: 'Producer Name',
//   };

//   const [albumData, setAlbumData] = useState(initialAlbumData);
//   const [comment, setComment] = useState('');
//   const [comments, setComments] = useState([]);

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleAddComment = () => {
//     if (comment.trim() !== '') {
//       setComments((prevComments) => [...prevComments, comment]);
//       setComment('');
//     }
//   };

//   const handleSaveComments = () => {
//     console.log('Save comments:', comments);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setAlbumData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleAddAlbum = () => {
//     // ave the new album data
//     console.log('Add Album:', albumData);
//     // Reset the form after adding the album
//     setAlbumData(initialAlbumData);
//   };

//   return (
//     <div id="album-page">
//       <div>
//         <h2>Add a New Album</h2>
//         <label>Album Name:</label>
//         <input
//           type="text"
//           name="album"
//           value={albumData.album}
//           onChange={handleInputChange}
//         />
//         <br />
//         <label>Artist Name:</label>
//         <input
//           type="text"
//           name="artist"
//           value={albumData.artist}
//           onChange={handleInputChange}
//         />
//         <br />
//         <label>Producer Name:</label>
//         <input
//           type="text"
//           name="producer"
//           value={albumData.producer}
//           onChange={handleInputChange}
//         />
//         <br />
//         <button onClick={handleAddAlbum}>Add Album</button>
//       </div>
//     </div>
//   );
// };

// export default AddAlbum;
