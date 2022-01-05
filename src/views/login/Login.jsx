import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  let { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedin = auth.login(username, password);

    loggedin ? history.replace(from) : setError('Login failed');
  };

  return (
    <>
      <h1>Welcome! Login here!</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="userName">UserName</label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Login</button>
      </form>
      <h3>{error}</h3>
    </>
  );
}
