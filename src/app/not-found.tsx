"use client";

import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  const psyduckImage =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png';

  return (
    <Container
      maxWidth="md"
      sx={{
        textAlign: 'center',
        pt: 8,
        color: '#fff',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        src={psyduckImage}
        alt="Psyduck confus"
        sx={{ maxWidth: 400, mb: 4, filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
      />
      <Typography variant="h1" sx={{ fontSize: '4rem', color: '#ff8a65', mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Psyduck est confus&nbsp;!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: '#ccc' }}>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="outlined"
        startIcon={<HomeIcon />}
        sx={{
          color: '#ff8a65',
          borderColor: '#ff8a65',
          textTransform: 'none',
        }}
      >
        RETOUR AU POKÉDEX
      </Button>
    </Container>
  );
}
