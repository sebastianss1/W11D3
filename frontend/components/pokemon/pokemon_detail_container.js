import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';

const mSTP = (state, ownProps) => {
    return {
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId],
        moves: Object.values(state.entities.moves),
        items: Object.values(state.entities.items) 
    }
}

const mDTP = (dispatch, ownProps) => ({
    requestPokemon: () => dispatch(requestPokemon(ownProps.match.params.pokemonId))
})

export default connect(mSTP, mDTP)(PokemonDetail);