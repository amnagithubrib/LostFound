// SignIn.js
import React, { useState } from 'react';
import './signin.css'; // Updated CSS file name
import Footer from './Footer';
import Header from './Header';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Send the username and password to the server for authentication
    // You can use an authentication API, fetch, or any other mechanism here
    // For demonstration purposes, just log the credentials to the console
    console.log('Signing in with Username:', username);
    console.log('Password:', password);

    // You can add your authentication logic here, for example, making an API call to validate the credentials
  };

  return (
    <div>
    <Header />
    <div className="custom-signin-container" >
      <h2 className="custom-signin-heading">Sign In</h2>
      <form onSubmit={handleSignIn} className="custom-signin-form">
        <label className="custom-signin-label">
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="custom-signin-input"
          />
        </label>
        <br />
        <label className="custom-signin-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="custom-signin-input"
          />
        </label>
        <br />
        <button type="submit" className="custom-signin-button">Sign In</button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default SignIn;
