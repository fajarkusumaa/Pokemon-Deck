import React from "react";
import "./Card.css";

function Modal({ id, name, image, pokeType, stats, statsName }) {
    return (
        <>
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
        </>
    );
}

export default Modal;
