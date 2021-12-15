import React from 'react';
import { useState } from 'react';
import { useEntries } from '../../context/entryContext';
import { useUser } from '../../context/userContext';

export default function GuestBook() {
  const [guestEntry, setGuestEntry] = useState('');
  const [name, setName] = useState('');
  const { entries, setEntries } = useEntries();
  const { user, setUser } = useUser();

  function updateNameEntry() {
    if (!guestEntry) return;

    setUser(name);
    setEntries([...entries, { name, message: guestEntry }]);
    setGuestEntry('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNameEntry();
  };

  const guestName = (
    <>
      <label htmlFor="guestname">Guest Name</label>
      <input
        id="guestname"
        type="text"
        placeholder="Guest Name."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );

  const displayMessage = user
    ? `Thanks for Signing in, ${user}!`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <form onSubmit={handleSubmit}>
        {user ? null : guestName}
        <label htmlFor="guestEntry">Guest Entry</label>
        <textarea
          id="guestentry"
          value={guestEntry}
          placeholder="Entry"
          onChange={(e) => setGuestEntry(e.target.value)}
        />
        <button type="submit">Sign.</button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setUser('');
              setName('');
            }}
          >
            Not {user}?
          </button>
        )}
      </form>
    </>
  );
}
