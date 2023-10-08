import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagen1 from '../images/sagitarioA.jpg'
import AppBarWithDrawer from './AppBar';
function Home(){
 return(
    <div>
      <AppBarWithDrawer/>
        <h1>Home</h1>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Sagitario A *"
        height="140"
        image={imagen1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        First Sagittarius A* Event Horizon Telescope Results. I.
        </Typography>
        <Typography variant="subtitle" color="text.secondary">
        Event Horizon Telescope Collaboration
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Kazunori Akiyama, Antxon Alberdi, Walter Alef, Juan Carlos Algaba, Richard Anantua, Keiichi Asada, Rebecca Azulay, Uwe Bach, Anne-Kathrin Baczko
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
 )
}

export default Home; 