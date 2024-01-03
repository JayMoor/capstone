import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        //component = 'img'
        
        // sx={{ height: 50 height not needed}} 
        />
        <img src = {props.album.imageURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.album.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.album.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.album.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.album.release_date}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button Link={} size="small">Review
        </Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}

