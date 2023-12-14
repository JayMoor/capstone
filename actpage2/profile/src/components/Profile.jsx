
// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import'./Profile.css';
import { Link } from 'react-router-dom';





const Profile = ({ userData }) => {
  const [editedUsername, setEditedUsername] = useState(userData.username);
  const [isEditing, setIsEditing] = useState(false);
  const [displaySection, setDisplaySection] = useState('comments'); // 'comments' or 'reviews'

  const handleUsernameChange = (e) => {
    setEditedUsername(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
  
    console.log('Saving username:', editedUsername);

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedUsername(userData.username);
    setIsEditing(false);
  };

  const handleSectionToggle = (section) => {
    setDisplaySection(section);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={userData.profilePicture} alt="Profile" className="profile-picture" />
        <div className="user-info">
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedUsername}
                onChange={handleUsernameChange}
                className="username-input"
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            <div>
              <h2>{userData.username}</h2>
              <p>{userData.email}</p>
              <button onClick={handleEditClick}>Edit Username</button>
            </div>
          )}
        </div>
      </div>
      <div className="sections-container">
        <button
          className={displaySection === 'comments' ? 'active-section' : ''}
          onClick={() => handleSectionToggle('comments')}
        >
          Comments
        </button>
        <button
          className={displaySection === 'reviews' ? 'active-section' : ''}
          onClick={() => handleSectionToggle('reviews')}
        >
          Reviews
        </button>
      </div>
      <div className="content-container">
        {displaySection === 'comments' && (
          <div className="section-container active-section">
            <div className="section">
              <h3>Comments</h3>
              <ul>
                {userData.comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {displaySection === 'reviews' && (
          <div className="section-container active-section">
            <div className="section">
              <h3>Reviews</h3>
              <ul>
                {userData.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      <Link to="/albumpage"></Link>
    </div>
  );
};

export default Profile;

