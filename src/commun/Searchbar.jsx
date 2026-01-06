import React, { useState, useEffect, useRef } from "react";

function Searchbar({ onSearch }) {
    const [pokemon, setPokemon] = useState(() => {
        return localStorage.getItem("searchTerm") || "";
    });

    const inputRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("searchTerm", pokemon);
    }, [pokemon]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    function handleChange(event) {
        const value = event.target.value;
        setPokemon(value);
        onSearch(value);
    }

    return (
        <div className="searchbar">
            <input
                ref={inputRef}
                value={pokemon}
                onChange={handleChange}
                type="text"
                placeholder="Search Pokémon..."
                className="searchbar-input"
                style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "8px",
                    backgroundColor: "#f9f9f9",
                }}
            />
        </div>
    );
}

export default Searchbar;