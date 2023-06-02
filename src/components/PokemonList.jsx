import React, { useEffect, useState } from "react";
import Card from "./Card";

import "./PokemonList.css";
// import axios from "axios";

const PokemonList = () => {
    const [allPokemons, setAllPokemons] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPokemon, setFilteredPokemon] = useState([]);

    // modal functio

    // const [isLoading, setIsLoading] = useState(true);

    const getAllPokemons = async () => {
        const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
        );
        const data = await res.json();

        for (const pokemon of data.results) {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const pokemonDetail = await res.json();
            setAllPokemons((current) => [...current, pokemonDetail]);
        }

        // setIsLoading(false);
    };
    console.log(allPokemons);

    useEffect(() => {
        getAllPokemons();
    }, []);

    useEffect(() => {
        const filteredResults = allPokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPokemon(filteredResults);
    }, [searchTerm, allPokemons]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <>
            <div className="container">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search pokemon name"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <div className="pokedeck">
                    <></>
                    {/* Card */}
                    {filteredPokemon.map((pokemonStats) => (
                        <div>
                            <Card
                                key={pokemonStats.id}
                                id={pokemonStats.id.toString().padStart(4, "0")}
                                name={pokemonStats.name.replace(/^./, (str) =>
                                    str.toUpperCase()
                                )}
                                image={
                                    pokemonStats.sprites.other[
                                        "official-artwork"
                                    ].front_default
                                }
                                pokeType={pokemonStats.types
                                    .map((stat) => stat.type.name)
                                    .slice(0, 3)}
                                statsName={pokemonStats.stats
                                    .map((stat) => stat.stat.name)
                                    .slice(0, 3)}
                                stats={pokemonStats.stats
                                    .map((stat) => stat.base_stat)
                                    .slice(0, 3)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PokemonList;
