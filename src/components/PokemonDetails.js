import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsEmojiHeartEyes } from "react-icons/bs";
import useStore from "../utils/StateStore";

export default function PokemonDetails() {
    const { id } = useParams();
    const [detailPokemon, setDetailPokemon] = useState();
    const [detailPokemonSpecies, setDetailPokemonSpecies] = useState(); 

    const getLove = useStore((state) => state.love);
    const loveButton = useStore((state) => state.addLove);

    useEffect(() => {
        PokemonAPI();
    }, []);

    const PokemonAPI = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            console.log(res.data);
            setDetailPokemon(res.data);
            const res2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
            console.log(res2.data);
            setDetailPokemonSpecies(res2.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container-detail">
            <div className="section-left">
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`}
                    alt={`Foto Pokemon ${id}`}
                />
                <div className="buttons">
                    <button className="btn-love" onClick={loveButton}>
                        <BsEmojiHeartEyes size={30} />
                    </button>
                    <h2> {getLove} Favorites</h2>
                </div>
            </div>
            <div className="section-right">
                <h1>
                    {detailPokemon && detailPokemon.species.name}
                </h1>
                <span>
                    {detailPokemonSpecies && detailPokemonSpecies.flavor_text_entries
                        .filter((item) => {
                            return item.version.name === "red";
                        })
                        .map((item) => <p>{item.flavor_text}</p>)
                    }    
                </span>
                <span>
                    {detailPokemonSpecies && detailPokemonSpecies.form_descriptions.description}
                </span>
                <span>
                    <strong>Height: </strong>
                    {detailPokemon && detailPokemon.height}
                </span>
                <span>
                    <strong>Weight: </strong>
                    {detailPokemon && detailPokemon.weight}
                </span>
                <span>
                    <strong>Growth Rate: </strong>
                    {detailPokemonSpecies && detailPokemonSpecies.growth_rate.name}
                </span>
                <span>
                    <strong>Egg Groups: </strong>
                    {detailPokemonSpecies && detailPokemonSpecies.egg_groups.map((item) => (
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    ))}
                </span>
                <span>
                    <strong>Color: </strong>
                    {detailPokemonSpecies && detailPokemonSpecies.color.name}
                </span>
                <span>
                    <strong>Shape: </strong>
                    {detailPokemonSpecies && detailPokemonSpecies.shape.name}
                </span>

                <span>
                    <strong>Abilities: </strong>
                    {detailPokemon && detailPokemon.abilities.map((item) => (
                        <ul>
                            <li>{item.ability.name}</li>
                        </ul>
                    ))}
                </span>
                <Link to={"/"} className="modal-close-btn">
                    Back
                </Link>  
            </div>
        </div>
        
    );
}