import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePokemon = (payload) => ({
  type: RECEIVE_POKEMON,
  payload
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const requestPokemon = (pokeId) => (dispatch) => {
  debugger
  return APIUtil.fetchPokemon(pokeId)
  .then(payload => dispatch(receivePokemon(payload)))
}

window.requestPokemon = requestPokemon;