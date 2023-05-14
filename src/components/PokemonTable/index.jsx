import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typeHandler } from '../../utils';

export default function PokemonTable({pokemonData}) {
const {height,weight, types} = pokemonData
const convertedHeight = height*10 //Converts decimetres to cm
const convertedWeight = weight*0.1 // Converts hectogram to kilogram

  return (
    <TableContainer component={Paper} sx={{height: "fit-content", maxWidth: "250px", boxShadow: "none"}}>
      <Table aria-aria-label='a dense table'>
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {"Height"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {convertedHeight + "cm"}
                </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {"Weight"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {convertedWeight + "kg"}
                </TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {"Type"}
                </TableCell>
                <TableCell component="th" scope="row">
                    {typeHandler(types)}
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
