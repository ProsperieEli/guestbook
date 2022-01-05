import React from 'react';
import { useUser } from '../../context/userContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { user } = useAuth();
  return (
    <header>
      {user ? (
        <p>Sign GuestBook as {user}</p>
      ) : (
        <Link to="/login">
          <button>Sign in!</button>
        </Link>
      )}
    </header>
  );
}
