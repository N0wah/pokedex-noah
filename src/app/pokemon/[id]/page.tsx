"use client";

import React, { useContext, useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import pokemonTypesList from '@/assets/pokemon_types_lists.json';
import { LocaleContext } from '@/components/LocaleContext';

export default function PokemonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id?: string };
  const idx = id ? parseInt(id, 10) - 1 : -1;

  const [pokemon, setPokemon] = useState<any | null>(null);
  const { language } = useContext(LocaleContext)!;
  const [movesOpen, setMovesOpen] = useState(false);
  const openMoves = () => setMovesOpen(true);
  const closeMoves = () => setMovesOpen(false);

  useEffect(() => {
    if (idx < 0) {
      router.push('/404');
      return;
    }
    import('@/assets/pokemon_lists.json').then((module) => {
      const entry = module.default[idx];
      if (!entry) {
        router.push('/404');
      } else {
        setPokemon(entry);
      }
    });
  }, [idx, router]);

  if (!pokemon) return null;

  return (
    <div className="flex flex-col items-center p-8">
      <Card sx={{ width: 400, maxWidth: '90%' }}>
        <CardMedia
          component="img"
          sx={{ height: 300, objectFit: 'contain', backgroundColor: '#f2f2f2' }}
          image={pokemon.image}
          alt={(pokemon.names as any)[language]}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {(pokemon.names as any)[language]}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            #{pokemon.id}
          </Typography>

          <div className="flex gap-2 mt-2">
            {pokemon.types.map((type: string) => (
              <div
                key={type}
                className="px-3 py-1 rounded text-white font-semibold"
                style={{
                  backgroundColor: ((pokemonTypesList as any)[type]?.backgroundColor as string) || '#666',
                }}
              >
                {type}
              </div>
            ))}
          </div>

          <div className="mt-4">
            <Typography variant="body1">
              <strong>Height:</strong> {pokemon.height}
            </Typography>
            <Typography variant="body1">
              <strong>Weight:</strong> {pokemon.weight}
            </Typography>
          </div>

          {pokemon.moves && pokemon.moves.length > 0 && (
            <CardActions className="justify-center mt-4">
              <Button
                variant="outlined"
                onClick={openMoves}
                sx={{
                  borderColor: '#ff8a65',
                  color: '#ff8a65',
                  textTransform: 'none',
                }}
              >
                MOVES
              </Button>
            </CardActions>
          )}
        </CardContent>
      </Card>

      <Dialog
        open={movesOpen}
        onClose={closeMoves}
        fullWidth
        maxWidth="sm"
        PaperProps={{ sx: { backgroundColor: '#333', color: '#fff' } }}
      >
        <DialogTitle sx={{ bgcolor: '#222', color: '#fff' }}>Pokemon Moves</DialogTitle>
        <DialogContent dividers sx={{ bgcolor: '#333', color: '#fff' }}>
          <ul className="list-disc ml-5">
            {pokemon.moves.map((move: string) => (
              <li key={move} className="py-0.5">
                {move}
              </li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#333' }}>
          <Button onClick={closeMoves} sx={{ color: '#fff' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
