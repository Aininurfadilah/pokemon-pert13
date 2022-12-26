import React, { useEffect, useState } from 'react';
import HubungiKamiForm from './HubungiKamiForm';
import { Pokemon } from "./Pokemon";
import axios from "axios";

export const Main = () => {
    const [listPokemon, setListPokemon] = useState([]);

    useEffect(() => {
        PokemonAPI();
    }, []);
    
    const PokemonAPI = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12`);
            console.log(res.data.results);
            setListPokemon(res.data.results);
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className='main-wrapper'>
            <div className='main'>
                <div className='hello-container'>
                    <h1>Hello, Pokemon Hunter!</h1>
                    <h2>Selamat datang di dunia Pokemon</h2>
                </div>
                <div className='pokemon-container'>
                    <h3>List Pokemon</h3>
                    <div className='list-card'>
                    {listPokemon.map((pokemon, index)=>{
                        return(
                            <Pokemon name={pokemon.name} id={index + 1}/>
                        );
                    })}
                    </div>
                </div>
                <div className='hubungikami-container'>
                    <h3>Hubungi Kami</h3>
                    <HubungiKamiForm/>
                </div>
            </div>
        </div>
    );
}