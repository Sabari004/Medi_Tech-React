import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../assets/hos.webp'
import RatingSIze from './RatingSize';

export default function Cardss(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography style={{padding:0}} gutterBottom variant="h5" component="div" >
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This Hospital is one of the best hospital in tamilnadu
        </Typography>
        <RatingSIze/>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}