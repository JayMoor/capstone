import React, { useState } from 'react'


const Login = ({history}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (username === 'user' && password === 'password'){
            history.push('/')
        } else {
            console.error('Incorrect username or Password please try again.')
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;
