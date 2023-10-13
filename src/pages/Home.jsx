import React, { useEffect, useState } from 'react'
import Navbar from '../components/NavBar/index.jsx'
import PokemonCard from '../components/PokemonCard/index.jsx'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import axios from 'axios'

export const Home = () => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemon()
    })
    // Fazendo uma requisição get
    const getPokemon = async () => {
        let endpoints = []
        for (let i = 1; i <= 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        let response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
        return response
    }
    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon, key) => (
                        <Grid item xs={2} key={key}>
                            <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}