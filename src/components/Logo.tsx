import Link from 'next/link';

/**
 * Application logo component.
 * Clicking the image navigates back to the home page via next/link.
 * Placed in header so that it's available globally.
 */
function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/logo_pokedex.svg" alt="Logo Pokédex" />
      </Link>
    </div>
  );
}

export default Logo;
