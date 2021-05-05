import React from 'react';
import { Link } from "react-router-dom";


const PokemonIndexItem = ({poke}) => (
        <Link to={`/pokemon/${poke.id}`}>
        <li className="pokemon-index-item">
            <span>{poke.id}</span>
            <img src={poke.imageUrl} />
            <span>{poke.name}</span>
        </li>
        </Link>
    )

export default PokemonIndexItem;