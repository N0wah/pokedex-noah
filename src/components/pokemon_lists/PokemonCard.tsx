"use client";

import React, { useContext } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { LocaleContext } from '@/components/LocaleContext';

// synchronous JSON import is fine for small dataset
import pokemonLists from '@/assets/pokemon_lists.json';
import pokemonTypesList from '@/assets/pokemon_types_lists.json';

interface PokemonCardProps {
  number: number; // zero-based index into the list
}

/**
 * A single card in the Pokémon grid. Displays the sprite, name and types.
 * Clicking the card navigates to /pokemon/:id via Next.js Link.
 */
export default function PokemonCard(props: PokemonCardProps) {
  const { language } = useContext(LocaleContext)!;
  const pokemon: any = pokemonLists[props.number];

  return (
    <Card sx={{ width: 250, maxHeight: 500 }}>
      <CardActionArea
        component={Link as any}
        href={`/pokemon/${pokemon.id}`}
        sx={{ textDecoration: 'none' }}
      >
        {/* image is loaded from static JSON data */}
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          image={pokemon.image}
          alt={(pokemon.names as any)[language]}
        />
        <CardContent>
          {/* localized name */}
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' }}>
            {(pokemon.names as any)[language]}
          </Typography>
          {/* type badges using color mapping */}
          <CardActions>
            <div
              className="px-4 py-2 rounded text-white font-semibold"
              style={{
                backgroundColor: (pokemonTypesList as any)[pokemon.types[0]].backgroundColor,
              }}
            >
              {pokemon.types[0]}
            </div>
            {pokemon.types[1] ? (
              <div
                className="px-4 py-2 rounded text-white font-semibold"
                style={{
                  backgroundColor: (pokemonTypesList as any)[pokemon.types[1]].backgroundColor,
                }}
              >
                {pokemon.types[1]}
              </div>
            ) : null}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
