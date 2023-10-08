import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Chip from '@mui/material/Chip'; // Importar Chip
import React from 'react'; // Importar React

export default function Tarjeta(props) {
  // Crear una función para convertir las etiquetas # en Chips
  const renderChips = () => {
    if (!props.categorias) {
      return null;
    }

    // Dividir el texto en etiquetas por el carácter #
    const etiquetas = props.categorias.split('#').filter((etiqueta) => etiqueta.trim() !== '');

    if (etiquetas.length === 0) {
      return null;
    }

    // Renderizar un Chip para cada etiqueta sin el #
    return etiquetas.map((etiqueta, index) => (
      <Chip
        key={index}
        label={etiqueta.trim()} // Eliminar el #
        variant="outlined"
        size="small" // Hacer el Chip más pequeño
        color="primary" // Establecer el color a "primary" (azul)
        sx={{ mr: 1, mb: 1 }} // Añadir margen derecho y margen inferior
      />
    ));
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="Sagitario A *" height="140" image={props.imagen} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.titulo}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.subtitulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.resumen}
        </Typography>
        {renderChips()} {/* Renderizar los Chips debajo del resumen */}
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small">Ver Más</Button>
      </CardActions>
    </Card>
  );
}
