import React from "react";
import "./Card.css";

import grass from "../icons/grass.svg";
import bug from "../icons/bug.svg";
import dark from "../icons/dark.svg";
import dragon from "../icons/dragon.svg";
import electric from "../icons/electric.svg";
import fairy from "../icons/fairy.svg";
import fighting from "../icons/fighting.svg";
import fire from "../icons/fire.svg";
import flying from "../icons/flying.svg";
import ghost from "../icons/ghost.svg";
import ground from "../icons/ground.svg";
import ice from "../icons/ice.svg";
import normal from "../icons/normal.svg";
import poison from "../icons/poison.svg";
import psychic from "../icons/psychic.svg";
import rock from "../icons/rock.svg";
import steel from "../icons/steel.svg";
import water from "../icons/water.svg";

const PokeTypeLogo = ({ pokeTypes }) => {
    if (pokeTypes === "grass") {
        return <img style={{ height: 20 }} src={grass} />;
    } else if (pokeTypes === "poison") {
        return (
            <>
                <img style={{ height: 20 }} src={poison} />
            </>
        );
    } else if (pokeTypes === "bug") {
        return (
            <>
                <img style={{ height: 20 }} src={bug} />
            </>
        );
    } else if (pokeTypes === "dark") {
        return (
            <>
                <img style={{ height: 20 }} src={dark} />
            </>
        );
    } else if (pokeTypes === "dragon") {
        return (
            <>
                <img style={{ height: 20 }} src={dragon} />
            </>
        );
    } else if (pokeTypes === "electric") {
        return (
            <>
                <img style={{ height: 20 }} src={electric} />
            </>
        );
    } else if (pokeTypes === "fairy") {
        return (
            <>
                <img style={{ height: 20 }} src={fairy} />
            </>
        );
    } else if (pokeTypes === "fighting") {
        return (
            <>
                <img style={{ height: 20 }} src={fighting} />
            </>
        );
    } else if (pokeTypes === "fire") {
        return (
            <>
                <img style={{ height: 20 }} src={fire} />
            </>
        );
    } else if (pokeTypes === "flying") {
        return (
            <>
                <img style={{ height: 20 }} src={flying} />
            </>
        );
    } else if (pokeTypes === "ghost") {
        return (
            <>
                <img style={{ height: 20 }} src={ghost} />
            </>
        );
    } else if (pokeTypes === "ground") {
        return (
            <>
                <img style={{ height: 20 }} src={ground} />
            </>
        );
    } else if (pokeTypes === "ice") {
        return (
            <>
                <img style={{ height: 20 }} src={ice} />
            </>
        );
    } else if (pokeTypes === "normal") {
        return (
            <>
                <img style={{ height: 20 }} src={normal} />
            </>
        );
    } else if (pokeTypes === "psychic") {
        return (
            <>
                <img style={{ height: 20 }} src={psychic} />
            </>
        );
    } else if (pokeTypes === "rock") {
        return (
            <>
                <img style={{ height: 20 }} src={rock} />
            </>
        );
    } else if (pokeTypes === "steel") {
        return (
            <>
                <img style={{ height: 20 }} src={steel} />
            </>
        );
    } else if (pokeTypes === "water") {
        return (
            <>
                <img style={{ height: 20 }} src={water} />
            </>
        );
    }
};

function Card({ id, name, image, pokeType, stats, statsName }) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-body">
                    <img
                        className="sprite"
                        style={{
                            height: 200
                        }}
                        src={image}
                        alt={name}
                    />

                    <div className="poke-atr">
                        <div className="poke-name">{name}</div>
                        <div className="poke-types">
                            {pokeType.map((type) => (
                                <PokeTypeLogo pokeTypes={type} />
                            ))}
                        </div>
                    </div>

                    <div className="base-stat">
                        <div className="stat-left">
                            {statsName.map((stats) => (
                                <p>{stats}</p>
                            ))}
                        </div>
                        <div className="stat-right">
                            {stats.map((stats) => (
                                <p>{stats}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
