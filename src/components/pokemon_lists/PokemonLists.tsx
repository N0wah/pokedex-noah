"use client";

import React, { useContext, useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { LocaleContext } from '@/components/LocaleContext';

/**
 * Displays a grid of PokemonCard components.
 * Props:
 *   - searchTerm: string entered in Searchbar
 */
interface PokemonListsProps {
  searchTerm: string;
}

export default function PokemonLists({ searchTerm }: PokemonListsProps) {
  const { language } = useContext(LocaleContext)!;

  // full list once imported
  const [allPokemon, setAllPokemon] = useState<any[]>([]);
  // list after filtering by term & language
  const [filteredPokemon, setFilteredPokemon] = useState<any[]>([]);

  // load JSON asynchronously on component mount
  useEffect(() => {
    import('@/assets/pokemon_lists.json').then((module) => {
      setAllPokemon(module.default);
    });
  }, []);

  // recalc filtered list whenever source / term / language changes
  useEffect(() => {
    if (allPokemon.length === 0) return;
    const term = searchTerm || (typeof window !== 'undefined' ? localStorage.getItem('searchTerm') || '' : '');
    if (typeof window !== 'undefined') {
      localStorage.setItem('searchTerm', term);
    }
    const filtered = allPokemon.filter((pokemon) =>
      pokemon.names[language]?.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPokemon(filtered);
  }, [allPokemon, searchTerm, language]);

  if (allPokemon.length === 0) {
    // still loading
    return <div className="p-8 text-center text-white">Chargement des Pokémon…</div>;
  }

  return (
    <div className="flex flex-wrap justify-center height-screen gap-3">
      {filteredPokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard number={pokemon.id - 1} />
        </div>
      ))}
    </div>
  );
}
