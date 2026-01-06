import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "./PokemonCard/";
import pokemon_lists from '../assets/pokemon_lists.json';
import { LocaleContext } from "../LocaleContext.jsx";

function PokemonLists({ searchTerm }) {
    const { language } = useContext(LocaleContext);
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    useEffect(() => {
        const term = searchTerm || localStorage.getItem("searchTerm") || "";
        localStorage.setItem("searchTerm", term);
        const filtered = pokemon_lists.filter((pokemon) =>
            pokemon.names[language]?.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredPokemon(filtered);
    }, [searchTerm, language]);

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

export default PokemonLists;