import React from 'react';
import { Link } from 'react-router-dom';

export const Pokemon = ({ name, id }) => {
    return (
        <div className="pokemon-card">
            <div class="pokemon-item">
                <h3>{name}</h3>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                    alt="Foto Pokemon"
                    className="img-pokemon"
                />
                <div>
                    <Link
                        to={`/detail/pokemon/${id}`}
                        className="modal-close-btn"
                    >
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};