import React from 'react'
import Navbar from '../components/NavBar/index.jsx'
import PokemonCard from '../components/PokemonCard/index.jsx'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Container maxWidth="false">
                <Grid container>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PokemonCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}