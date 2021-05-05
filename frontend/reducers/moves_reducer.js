import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_MOVE } from './../actions/moves_actions';


const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POKEMON:
            return Object.assign({}, action.payload.moves, state);
        case RECEIVE_MOVE:
            return Object.assign({}, action.moves, state);
        default:
            return state;
    }
}

export default movesReducer;
