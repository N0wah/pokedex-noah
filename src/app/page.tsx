"use client";

import React, { useState } from 'react';
import Searchbar from '@/components/Searchbar';
import PokemonLists from '@/components/pokemon_lists/PokemonLists';

// homepage for the pokédex; keeps search state and renders list
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Searchbar onSearch={setSearchTerm} />
      <PokemonLists searchTerm={searchTerm} />
    </div>
  );
}
