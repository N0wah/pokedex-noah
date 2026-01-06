import React, { useState } from "react";
import Searchbar from "../commun/Searchbar";
import PokemonLists from "./PokemonLists";

function PokemonListPage() {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <Searchbar onSearch={(term) => setSearchTerm(term)} />
            <PokemonLists searchTerm={searchTerm} />
        </div>
    );
}

export default PokemonListPage;