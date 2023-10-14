import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/index.jsx'
import PokemonCard from '../components/PokemonCard/index.jsx'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import axios from 'axios'
import { Skeletons } from '../components/Skeletons/Skeletons.jsx'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemon()
    })
    // Fazendo uma requisição get
    const getPokemon = async () => {
        let endpoints = []
        for (let i = 1; i <= 200; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        let response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
        return response
    }

    // Função para filtrar os pokemons
    const pokemonFilter = (name) => {
        let filteredPokemons = []
        if (name === "") {
            getPokemon()
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons)
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? (<Skeletons />) :
                        (pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={4} md={2} key={key}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>
                        ))
                        )}
                </Grid>
            </Container>
        </div>
    )
}