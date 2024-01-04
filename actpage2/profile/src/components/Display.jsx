import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(props) {

  // get current path with react router
  const currentPath = window.location.pathname.split('/')[1];

  return (
    <Card sx={{ maxWidth: 345, margin: '15px' }}>
      <CardMedia
        component = 'img'
      />
        <img src = {props.album.imageURL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.album.name}
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
          {props.album.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.album.genre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(props.album.release_date).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
        </Typography>
      </CardContent>
      <CardActions>
        {currentPath === 'Home' ? 
        <Button 
        size="small"
        onClick={() => {
          window.location.href = `/albumpage/${props.album.id}`;
        }}
        >
          Review
      </Button> :
        <Button 
        size="small"
        onClick={() => {
          window.location.href = `/Home/`;
        }}
        >
          Return Home
      </Button> }
    </CardActions>
    </Card>
  );
}

