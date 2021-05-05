export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}


// export const selectPokemonItems = ({pokemon, items }) => {
//   const pokeId = this.pokemon.match.id 
//   const pokeItems = Object.values(items).filter(item => {
//     return ()
//     })

// }