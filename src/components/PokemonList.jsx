import React, { useEffect, useState } from "react";
import Card from "./Card";

import "./PokemonList.css";
// import axios from "axios";

const PokemonList = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const getAllPokemons = async () => {
        const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
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

    // if (isLoading) {
    //     return (
    //         <>
    //             <h1>Loading</h1>
    //         </>
    //     );
    // }

    return (
        <>
            <div className="pokedeck">
                {allPokemons.map((pokemonStats) => (
                    <Card
                        key={pokemonStats.id}
                        id={pokemonStats.id.toString().padStart(4, "0")}
                        name={pokemonStats.name.replace(/^./, (str) =>
                            str.toUpperCase()
                        )}
                        image={
                            pokemonStats.sprites.other["official-artwork"]
                                .front_default
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
                ))}
            </div>
        </>
    );
};

export default PokemonList;
