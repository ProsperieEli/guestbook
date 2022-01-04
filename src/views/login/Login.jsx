import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { formState, handleFormChange } = useForm({
    userName: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const { from } = location.state || { from: { pathname: '/' } };

  const handleLogin = (e) => {
    expect.preventDefault();
    const loggedin = auth.login(formState.userName, formState.password);

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
          value={formState.userName}
          onChange={(event) => handleFormChange(event)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formState.password}
          onChange={(event) => handleFormChange(event)}
        />
        <button>Login</button>
      </form>
      <h3>{error}</h3>
    </>
  );
}
