import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { typeHandler } from '../../utils';

export default function PokemonCard({name, image, types}) {
  return (
    <Card sx={{ maxWidth: 300, margin: 1 }}>
      <CardMedia component="img" height={250} image={image} alt="Pokemon info"/>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography >
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler(types)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}