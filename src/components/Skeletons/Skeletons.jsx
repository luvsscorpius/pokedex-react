import React from 'react'
import { Container, Skeleton } from '@mui/material'

export const Skeletons = () => {
    return (
        <Container maxWidth="xl">
            <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: "1em" }} />
            <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: "1em" }} />
        </Container>

    )

}