import React from 'react';
import Logo from './Logo';
import SelectLanguage from './SelectLanguage';

/**
 * Page header used on every screen.
 * Contains the application logo (clickable home link)
 * and the language selector dropdown.
 */
function Header() {
  return (
    <header>
      {/* clicking the logo returns to the root route */}
      <Logo />
      {/* global language switcher, persists choice in localStorage */}
      <SelectLanguage />
    </header>
  );
}

export default Header;
