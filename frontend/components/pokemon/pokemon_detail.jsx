import React from 'react';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.pokemonId)
    }

    render() {
        const {pokemon, items, moves} = this.props;
        if (!pokemon.id) return <h3>Loading...</h3>
        debugger
        return(
            <div className="pokemon-show">
                <ul className="pokemon-info">
                    <li><img src={`${pokemon.imageUrl}`} alt="pokemon-img"/></li>
                    <li>{pokemon.name}</li>
                    <li>{pokemon.pokeType}</li>
                    <li>{pokemon.attack}</li>
                    <li>{pokemon.defense}</li>
                </ul>
                <div className="pokemon-moves">
                    {moves.map(move => move.name).join(", ")}
                </div>
                <ul className="pokemon-items">
                    {items.map( item => <li><img src={item.imageUrl} alt="item-img"/></li>)}
                </ul>
            </div>
        )
    }
}

export default PokemonDetail;