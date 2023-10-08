import React from "react";
import Tarjeta from "./Tarjeta";
import imagen1 from '../images/sagitarioA.jpg';
import imagen2 from '../images/imagen2.png'
import imagen3 from '../images/ia.jpg'
import Grid from '@mui/material/Grid';

function Home() {
  return (
    <div className="divCentral">
      <Grid container spacing={3}>
        <Grid item xs={8} sm={4}> 
          <Tarjeta
            titulo="First Sagittarius A* Event Horizon Telescope Results. I."
            subtitulo="Event Horizon Telescope Collaboration"
            resumen="We present the first Event Horizon Telescope (EHT) observations of Sagittarius A* (Sgr A*), the Galactic center source associated with a supermassive black hole. These observations were conducted in 2017 using a global interferometric array of eight telescopes operating at a wavelength of λ = 1.3 mm."
            imagen={imagen1}
            categorias={"#Recursos Naturales, Ambiente y Energia, #Astronomia"}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Tarjeta
            titulo="Immense relief"
            subtitulo="Universe-mapping Euclid telescope fixes problem that threatened mission"
            resumen="A problem with the onboard software failing to recognize cosmic rays (which appear as faint dots in this image) meant that Euclid sometimes couldn’t lock into place, and produced images that appear to show swirling star trails"
            imagen={imagen2}
            categorias={"#Recursos Naturales, Ambiente y Energia, #Astronomia"}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Tarjeta
            titulo="Deep learning shows how global warming affects daily rainfall"
            subtitulo=""
            resumen="An artificial-intelligence method called deep learning has been used to detect signals of human-induced climate change in daily precipitation data. The results indicate that global warming has increased day-to-day rainfall variability in tropical and mid-latitude regions over the past 40 years."
            imagen={imagen3}
            categorias={"#Tecnologías de la Información y la Comunicación, #Calentamiento Global, #Recursos Naturales, Ambiente y Energía"}
          />
        </Grid>
      </Grid>
    </div>

  )
}

export default Home; 