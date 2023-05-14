import { Container, Skeleton } from "@mui/material";
import React from "react";

export const Skeletons = () => {
    return(
        <Container maxWidth="xxl">
                <Skeleton variant="rounded" sx={{marginBottom: "1em", maxWidth: 300, height: 250}}/>
                <Skeleton variant="rounded" sx={{marginBottom: "1em", maxWidth: 300, height: 250}}/>
                <Skeleton variant="rounded" sx={{marginBottom: "1em", maxWidth: 300, height: 250}}/>
                <Skeleton variant="rounded" sx={{marginBottom: "1em", maxWidth: 300, height: 250}}/>
                <Skeleton variant="rounded" sx={{marginBottom: "1em", maxWidth: 300, height: 250}}/>
        </Container>
    )
}