import logo_pokedex from '/logo_pokedex.svg';

function Logo() {
    return (
        <div className="logo">
            <img src={logo_pokedex} alt="Logo Pokédex" />
        </div>
    );
}

export default Logo;