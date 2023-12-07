import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import AlbumPage from './components/AlbumPage';
import Login from './components/login'


const App = () => {
  // State for user profile data
  const [userData, setUserData] = useState({
    profilePicture: 'path/to/default-profile-picture.jpg',
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    reviews: ['Great user!', 'Excellent service!'],
    comments: ['Nice profile!', 'Awesome experience!'],
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await fetch('/api/user-data'); 
        const data = await response.json();

        
        setUserData((prevUserData) => ({
          ...prevUserData,
          ...data,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    
    <Router>
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/profile" element={<Profile userData={userData} />} />
          <Route path="/albumpage" element={<AlbumPage userData={userData} />} />
          <Route path="/login" element={<Login userData={userData}/>} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;

