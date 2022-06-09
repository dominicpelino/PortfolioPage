import React from 'react';
import { styled } from '@mui/system';
import {
    Typography,
    Container,
    Grid,
    ImageList,
    ImageListItem,
    Tooltip,
    IconButton,
    Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Root, Main } from '../Home';

//  Grid Images
import backrope_image from '../../assets/images/backrope.jpeg';
import canyoneer_image from '../../assets/images/canyoneer.jpeg';
import helens_image from '../../assets/images/helens.jpg';
import sbsit_image from '../../assets/images/sbsit.jpg';
import spiritlake_image from '../../assets/images/spiritlake.jpg';
import enchant_image from '../../assets/images/enchant.jpeg';
import jump_image from '../../assets/images/jump.jpg';
import jumpmaster_image from '../../assets/images/jumpmaster.jpg';
import patrol_image from '../../assets/images/patrol.jpg';
import recce_image from '../../assets/images/recce.jpg';
import code_image from '../../assets/images/code.jpg';

const BackgroundPicMobile = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '45%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '165%',
    zIndex: '-1'
});
const BackgroundWeb = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    top: '65%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: '-2'
});
const OverlayWeb = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '100%',
    height: '165%',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    position: 'absolute',
    zIndex: '-1'
});
const OverlayMobile = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '100%',
    height: '199%',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    position: 'absolute',
    zIndex: '-1'
});

export const About = () => {
  return (
        <Root>
            <Box sx={{ display: {xs: 'none', md: 'block'}}}>
                <OverlayWeb/>
            </Box>
            <Main>
            <BackgroundWeb/>
                <Box sx={{ display: {xs: 'block', sm: 'block', md: 'block', lg: 'none' }}}>
                    <BackgroundPicMobile/>
                </Box>
                <Box sx={{ display: {xs: 'block', sm: 'block', md: 'block', lg: 'none' }}}>
                    <OverlayMobile/>
                </Box>
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={8} display="flex" flexDirection="row" >
                            <Tooltip title="Home" placement='bottom' arrow>
                                <IconButton component={Link} to='/'>
                                    <HomeIcon color="secondary" sx={{ fontSize: 50 }}/>
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={6} sm={4} display="flex" flexDirection="row" >
                            <Typography sx={{mt: 1}} variant="h4" align="center" color="secondary" paragraph>
                                DOMINIC PELINO
                            </Typography>
                        </Grid>
                            {/* Work */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'none', sm: 'block', md: 'block'}}}>
                                <Typography variant="h4" align="center" color="white" paragraph>
                                    Work
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    After about a decade in the Army, several trips around the globe, 
                                    and a multitude of experiences; I separated honorably 
                                    from the Army in 2022. 
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    Working in the military provided me many opportunities, 
                                    one of the most valuable was to work alongside people from all walks of life. 
                                    I am grateful to have been able to learn so much.
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    Although I found the military to be fulfilling and impactful, 
                                    I wanted to find a new purpose as a software engineer.  
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    I believe the tech industry is at the forefront of problem solving,
                                    whether it be conveniences in our daily lives or global concerns.
                                    Software development is a frontier with endless possibilities, 
                                    and I am excited to be a part of it.
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    On a less serious note: I also simply enjoy the work; I like the creative freedom 
                                    of building something brand new, I like problem solving, I like creating efficiencies, 
                                    and I LOVE the ah-ha moment of fixing a particularly tricky piece of code.
                                </Typography>
                            </Grid>
                            {/* Work Narrow*/}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'block', sm: 'none'}}}>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    Work
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    After about a decade in the Army, several trips around the globe, 
                                    and a multitude of experiences; I separated honorably 
                                    from the Army in 2022. 
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    Working in the military provided me many opportunities, 
                                    one of the most valuable was to work alongside people from all walks of life. 
                                    I am grateful to have been able to learn so much.
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    Although I found the military to be fulfilling and impactful, 
                                    I wanted to find a new purpose as a software engineer.  
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    I believe the tech industry is at the forefront of problem solving,
                                    whether it be conveniences in our daily lives or global concerns.
                                    Software development is a frontier with endless possibilities, 
                                    and I am excited to be a part of it.
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    On a less serious note: I also simply enjoy the work; I like the creative freedom 
                                    of building something brand new, I like problem solving, I like creating efficiencies, 
                                    and I LOVE the ah-ha moment of fixing a particularly tricky piece of code.
                                </Typography>
                            </Grid>
                            {/* Work Images */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'none', md: 'block'}}}>
                                <ImageList
                                    sx={{ width: 1, height: 1 }}
                                    variant="quilted"
                                    cols={4}
                                    rowHeight={100}>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${jumpmaster_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${patrol_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${recce_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${jump_image}`}/>
                                        </ImageListItem>
                                </ImageList>
                            </Grid>
                            {/* Work Images Narrow */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'block', md: 'none'}}}>
                                <ImageList
                                    sx={{ width: 1, height: 1}}
                                    variant="quilted"
                                    cols={4}
                                    rowHeight={50}>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${jumpmaster_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${patrol_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${recce_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${jump_image}`}/>
                                        </ImageListItem>
                                </ImageList>
                            </Grid>
                            {/* Life Images */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'none', md: 'block'}}}>
                                <ImageList
                                    sx={{ width: 1, height: 1 }}
                                    variant="quilted"
                                    cols={4}
                                    rowHeight={100}>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${sbsit_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={2}>
                                            <img src={`${spiritlake_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={1} rows={2}>
                                            <img src={`${backrope_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={1} rows={2}>
                                            <img src={`${canyoneer_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${enchant_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={2}>
                                            <img src={`${helens_image}`}/>
                                        </ImageListItem>
                                </ImageList>
                            </Grid>
                            {/* Life */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'none', sm: 'block'}}}>
                                <Typography variant="h4" align="center" color="white" paragraph>
                                    Life
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    Born and raised in Columbus, Ohio but moved out to Washington in 2012 for work. 
                                    I have been out west ever since and I currently live in Tacoma. 
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    I thoroughly enjoy the culture, lifestyle, and outdoor activities 
                                    that the west coast has to offer. 
                                    That being said I do enjoy traveling and try and do so when I can.  
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    I love weekend trips to see friends and family around the country, 
                                    and have been fortunate enough to do some International traveling as well.  
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    When not working, or sprinting from airport to airport, I try to unplug 
                                    and get outdoors as much as possible. 
                                    Some of my favorite hobbies are: snowboarding, mountaineering, canyoneering, and hiking.
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    To end on a fun fact I come from a large family and there are now three of us in
                                    the software development field. I guess you could say it runs in the family.
                                </Typography>
                            </Grid>
                            {/* Life Narrow*/}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'block', sm: 'none'}}}>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    Life
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    Born and raised in Columbus, Ohio but moved out to Washington in 2012 for work. 
                                    I have been out west ever since and I currently live in Tacoma. 
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    I thoroughly enjoy the culture, lifestyle, and outdoor activities 
                                    that the west coast has to offer. 
                                    That being said I do enjoy traveling and try and do so when I can.  
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    I love weekend trips to see friends and family around the country, 
                                    and have been fortunate enough to do some International traveling as well.  
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    When not working, or sprinting from airport to airport, I try to unplug 
                                    and get outdoors as much as possible. 
                                    Some of my favorite hobbies are: snowboarding, mountaineering, canyoneering, and hiking.
                                </Typography>
                                <Typography variant="caption" align="center" color="white" paragraph>
                                    To end on a fun fact I come from a large family and there are now three of us in
                                    the software development field. I guess you could say it runs in the family.
                                </Typography>
                            </Grid>
                            {/* Life Images Narrow */}
                            <Grid item xs={12} md={6} lg={6} sx={{ display: {xs: 'block', md: 'none'}}}>
                                <ImageList
                                    sx={{ width: 1, height: 1, }}
                                    variant="quilted"
                                    cols={4}
                                    rowHeight={60}>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${sbsit_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={2}>
                                            <img src={`${spiritlake_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={1} rows={2}>
                                            <img src={`${backrope_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={1} rows={2}>
                                            <img src={`${canyoneer_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={3}>
                                            <img src={`${enchant_image}`}/>
                                        </ImageListItem>
                                        <ImageListItem cols={2} rows={2}>
                                            <img src={`${helens_image}`}/>
                                        </ImageListItem>
                                </ImageList>
                            </Grid>
                    </Grid>
                </Container>
            </Main>
        </Root>
    );
};




