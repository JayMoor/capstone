import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import AlbumPage from './components/AlbumPage';
import AuthForm from './components/login'
import UserList from './components/UserList';
import AddAlbum from './components/AddNewAlbum';


const App = () => {
  const [userData, setUserData] = useState({
    profilePicture: 'path/to/default-profile-picture.jpg',
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    reviews: ['sup bro', 'great song!'],
    comments: ['nice flow!', 'Awesome experience!'],
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
    
    
      <div id="app" className='grid-container'>
        <Navbar />
        <div className='grid-content'>
        <Routes>
          <Route path="/profile" element={<Profile userData={userData} />} />
          <Route path="/albumpage" element={<AlbumPage userData={userData} />} />
          <Route path="/login" element={<AuthForm userData={userData}/>} />
          <Route path ="/register" element={<AuthForm userData={userData}/>} />
          <Route path="/UserList" element={<UserList userdata={userData}/>}/>
          <Route path="/AddAlbum" element={<AddAlbum userData={userData} />} />
        </Routes>
        </div>
      </div>
    
  );
};


export default App;
