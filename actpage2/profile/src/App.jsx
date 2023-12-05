import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import AlbumPage from './components/AlbumPage';



const App = () => {
  // State for user profile data
  const [userData, setUserData] = useState({
    profilePicture: 'path/to/default-profile-picture.jpg',
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    reviews: ['Great user!', 'Excellent service!'],
    comments: ['Nice profile!', 'Awesome experience!'],
  });

  // Fetch additional data when the component mounts
  useEffect(() => {
    // API endpoint to fetch user data
    const fetchData = async () => {
      try {
        // Update this URL with your actual API endpoint
        const response = await fetch('/api/user-data'); // Use an absolute path or configure your server to handle relative paths
        const data = await response.json();

        // Update the state with the fetched data
        setUserData((prevUserData) => ({
          ...prevUserData,
          ...data,
        }));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    
    <Router>
    <div id="app">
      
      <Navbar />

      <Switch>
        <Route path="/profile" exact component={Profile} />
        <Route path="/albumpage" exact component={AlbumPage} />
        
      </Switch>
    </div>
  </Router>
  );
};


export default App;

