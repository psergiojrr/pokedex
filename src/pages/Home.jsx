import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Box, Container, Grid } from "@mui/material";
import PokemonCard from "../components/PokemonCard";
import axios from "axios";
import { Skeletons } from "../components/Skeletons";
import { useNavigate } from "react-router-dom";

export const Home = ({setPokemonData}) => {
    const [pokemons, setPokemons] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getPokemons()
    },[])

    const getPokemons = () => {
        const endpoints = []
        const pokemonAmount = 20 //Defines how much pokemons will be displayed
        for(let i=1; i<=pokemonAmount;i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const response = axios.all(endpoints.map((endpoint) => 
            axios
                .get(endpoint)))
                .then((res) => setPokemons(res))
                .catch(e => console.log(e))
        return response
    }

    const pokemonFilter = (name) => {
        const filteredPokemons = []
        name === "" ? getPokemons() : ''
        for(const i in pokemons){
            if(pokemons[i].data.name.includes(name)){
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }
    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData)
        navigate("/profile")
    }
    return(
        <div>
            <NavBar pokemonFilter={pokemonFilter}/>
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? <Skeletons/> :
                        pokemons.map((pokemon, key)=>(
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <Box onClick={() => pokemonPickHandler(pokemon.data)} sx={{cursor: 'pointer'}}>
                                    <PokemonCard 
                                        name={pokemon.data.name}
                                        image={pokemon.data.sprites.front_default}
                                        types={pokemon.data.types}
                                        abilities={pokemon.data.abilities}
                                    />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}