import React, { useState } from 'react';

import './App.css';
import Header from './commun/Header.jsx';
import PokemonListPage from './pokemon_lists/PokemonListPage.jsx';
import { LocaleProvider } from './LocaleContext.jsx';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <LocaleProvider value={{ language, setLanguage }}>
        <Header></Header>
        <PokemonListPage></PokemonListPage>
      </LocaleProvider>
    </div>
  );
}

export default App;
