import React, { useState } from 'react';
import './Login.css';
import Footer from './Footer';
import Header from './Header';

import { Link } from 'react-router-dom'; 
const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., send credentials to a server, validate, etc.)
    // For demonstration purposes, just log the credentials to the console
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>If you already have an account, please <Link to="/signin">sign in</Link>.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
