import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const AuthForm = ({ onAuthFormSubmit, setUserData }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (event) => {
        event.preventDefault();
        if (location.pathname === '/login') {
            await login(username, password);
        } else {
            await register(username, password);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/login', { username, password });
            
        } catch (error) {
            console.error('Login error:', error);
            
        }
    };

    const register = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:3001/api/auth/register', { username, password });
            const {token, user} = response.data;
            window.localStorage.setItem('token', token);
            setUserData(user)
            
        } catch (error) {
            console.error('Registration error:', error);
           
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>{location.pathname === '/login' ? 'Login' : 'Register'}</h2>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">
                    {location.pathname === '/login' ? 'Login' : 'Register'}
                </button>
            </div>
        </form>
    );
};

export default AuthForm;
