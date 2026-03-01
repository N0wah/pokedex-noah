"use client";

import React, { useState, useEffect, useRef } from 'react';

interface SearchbarProps {
  onSearch: (term: string) => void;
}

/**
 * Searchbar component rendered at top of list page.
 * Stores the current search term in local state and synchronizes it
 * with localStorage so that the term persists across reloads.
 */
function Searchbar({ onSearch }: SearchbarProps) {
  const [pokemon, setPokemon] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  // load persisted term once client-side
  useEffect(() => {
    const stored = localStorage.getItem('searchTerm');
    if (stored) {
      setPokemon(stored);
      onSearch(stored);
    }
  }, [onSearch]);

  // sync state -> localStorage
  useEffect(() => {
    localStorage.setItem('searchTerm', pokemon);
  }, [pokemon]);

  // focus the input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPokemon(value);
    onSearch(value);
  }

  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        value={pokemon}
        onChange={handleChange}
        type="text"
        placeholder="Search Pokémon..."
        className="searchbar-input"
        style={{
          width: '100%',
          borderRadius: '8px',
          border: '1px solid #ccc',
          padding: '8px',
          backgroundColor: '#f9f9f9',
          color: '#000',
        }}
      />
    </div>
  );
}

export default Searchbar;
