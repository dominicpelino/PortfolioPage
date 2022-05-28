import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/system';

import { Home } from '../Home';

//  Background Image
import code_image from '../../assets/images/code.jpg';

const Root = styled("div")({
  padding: 0,
  margin: 0
});
const ProjectDisplay = styled('main')( {
  width: '400px',
  textAlign: 'center',
  position: 'relative',
  top: '50%',
  left: '65%',
  transform: 'translate(-50%, -50%)',
  color: 'rgb(156,39,177)'
});
const ProjectsMain = styled('main')( {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'absolute',
  zIndex: '-1'
});

export const Projects = () => {
  return (
    <Root>
      <ProjectsMain>
        <Home/>
        <ProjectDisplay>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image=''
                  alt="Storm"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gestra -- weather app
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Full-stack, multi-page, React/Flask web application, which provides users with aggregated, 
                    historical weather data, allowing them to make informed decisions for their outdoor adventures.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="../../assets/images/spotify.jpg"
                  alt="Spotify Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Spotify -- song sampler
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An interactive webpage with album cover art and 30 second song samples from Spotify.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          </ProjectDisplay>
      </ProjectsMain>
    </Root>
  )
};

