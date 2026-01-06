import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import pokemon_lists from '../assets/pokemon_lists.json';
import pokemonTypesList from '../assets/pokemon_types_lists.json';
import { LocaleContext } from '../LocaleContext.jsx';

export default function PokemonCard(props) {
  const { language } = useContext(LocaleContext);

  return (
    <Card sx={{ width: 250, maxHeight: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 200 }}
          image={pokemon_lists[props.number].image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' }}>
            {pokemon_lists[props.number].names[language]}
          </Typography>
          <CardActions>
            <div size="small" className='px-4 py-2 rounded text-white font-semibold'
              style={{ backgroundColor: pokemonTypesList[pokemon_lists[props.number].types[0]].backgroundColor }}>
              {pokemon_lists[props.number].types[0]}
            </div>
            {pokemon_lists[props.number].types[1] ? (
              <div size="small" className='px-4 py-2 rounded text-white font-semibold'
                style={{ backgroundColor: pokemonTypesList[pokemon_lists[props.number].types[1]].backgroundColor }}>
                {pokemon_lists[props.number].types[1]}
              </div>
            ) : null}
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}