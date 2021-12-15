import React from 'react';
import { useUser } from '../../context/userContext';

export default function Header() {
  const { user } = useUser();
  return (
    <header>{user ? <p>Sign GuestBook as {user}</p> : <p>Sign in!</p>}</header>
  );
}

export { Header };
