import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPokemon from "./components/ListPokemon";
import PokemonDetails from "./components/PokemonDetails";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokemonreact" element={<ListPokemon />} />
                <Route path="/detail/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>   
    )
}