import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../components/PokemonTable";
import { useNavigate } from "react-router-dom";

export const Profile = ({pokemonData}) => {
    const { name, sprites, moves } = pokemonData || {}
    const navigate = useNavigate()

    useEffect(() => {
        if(!pokemonData){
            navigate("/")
        }
    },[])

    if(!pokemonData){
        return null
    }
    return(
        <div>
            <NavBar hideSearch/>
            <Container maxWidth="md">
                <Paper elevation={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" padding={5}>
                        <Typography variant="h5">
                            {name}
                        </Typography>
                        <Box 
                            display="flex" 
                            alignItems="center" 
                            width="100%"
                            justifyContent="center"
                            marginBottom="15px" 
                            sx={{flexDirection:{
                                xs: "column",
                                md: "row"
                            }}}
                        >
                            <Box component="img" src={sprites.front_default} width="30%" height="100%"></Box>
                            <PokemonTable pokemonData={pokemonData}/>
                        </Box>
                        <Box width="100%">
                            <Divider>Varieties</Divider>
                            <Box margin={1} display="flex" justifyContent="space-between">
                                <Box component="img" src={sprites.front_female} width="33%" height="50%"></Box>
                                <Box component="img" src={sprites.front_shiny} width="33%" height="50%"></Box>
                                <Box component="img" src={sprites.front_shiny_female} width="33%" height="50%"></Box>
                            </Box>
                            <Divider>Attack</Divider>
                            <Box textAlign="center" marginTop="10px">
                                {moves.map((moveData) => <Chip sx={{margin: "5px"}} label={moveData.move.name}/>)}
                            </Box>
                        </Box>
                    </Box>                
                </Paper>
            </Container>
        </div>
    )
}