import React from 'react';
import { useEntries } from '../../context/entryContext';
import Entry from '../Entry/Entry';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <>
      {entries ? (
        <ul>
          {entries.map((entry) => {
            return (
              <li key={`${entry.name}-${entry.message}`}>
                <Entry entry={entry} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
