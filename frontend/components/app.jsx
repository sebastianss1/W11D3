import { Route, Switch, Redirect } from "react-router-dom";
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import React from 'react';
import PokemonDetailContainer from './../components/pokemon/pokemon_detail_container';

const App = () => (
    <Switch>
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <Route path="/" component={PokemonIndexContainer} />
        
    </Switch>    
)

export default App;