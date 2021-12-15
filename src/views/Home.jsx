import React from 'react';
import EntryList from '../components/entryList/EntryList';
import GuestBook from '../components/guestBook/GuestBook';
import { EntryProvider } from '../context/entryContext';

export default function Home() {
  return (
    <EntryProvider>
      <GuestBook />
      <EntryList />
    </EntryProvider>
  );
}
