import React from 'react';
import { styled } from '@mui/system';
import { 
    IconButton,
    Tooltip,
    Typography,
    Container,
    Grid,
    Box,
    ImageListItem,
    ImageList,
    Stack
 } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Images
import code_image from '../../assets/images/code.jpg';
import hero_image from '../../assets/images/hero.jpg';

//  Home Styles
export const Root = styled("div")({
    padding: 0,
    margin: 0,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    minHeight: 950,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: '-2'
});
export const Main = styled('main')( {
   
});
export const BackgroundPic = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    top: '100%',
    zIndex: '-2'
});
export const Overlay = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '100%',
    height: '100%',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    position: 'absolute',
    zIndex: '-1'
});
export const OverlayTwo = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '100%',
    height: '190%',
    backgroundSize: '100%',
    backgroundRepeat: 'repeat',
    position: 'absolute',
    zIndex: '-1'
});

export const Home = () => {
    return (
        <Root>
            <Overlay/>
            <Main>
                <Box sx={{ display: {xs: 'block', sm: 'none'}}}>
                    <BackgroundPic/>
                    <OverlayTwo/>
                </Box>
                <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
                    {/* Hero Image */}
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <ImageList sx={{ width: 1, height: 1}}
                                cols={1}
                                rowHeight={100}>
                                <ImageListItem cols={1} rows={4}>
                                    <img src={`${hero_image}`}/>
                                </ImageListItem>
                            </ImageList> 
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <Box sx={{height: 'auto', mt: { xs: 0, sm: 10 } }} >
                                <Typography variant="h2" align="center" color="secondary" paragraph>
                                    DOMINIC PELINO
                                </Typography>
                                <Typography variant="h4" align="center" color="white" paragraph> 
                                    Full Stack Software Engineer
                                </Typography>
                                <Typography variant="h6" align="center" color="white" paragraph>
                                    <Stack>I created this page to showcase who I am and what I like to do.</Stack>
                                    <Stack>Please look around and feel free to contact me.</Stack>
                                    <Stack>I am always open to new connections!</Stack>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm={3}>
                                <Box sx={{height: 'auto', mt: 5, ml: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <Stack>
                                        <IconButton component={Link} to='/about' >
                                            <AccountCircleIcon color='secondary' sx={{ fontSize: 50 }}/>
                                        </IconButton>
                                        <Typography variant="h5" align="center" color="white" paragraph>About Me</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box sx={{height: 'auto', mt: 5, ml: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <Stack>
                                        <IconButton href='https://www.linkedin.com/in/dominic-pelino-038b31208'>
                                            <LinkedInIcon color='secondary' sx={{ fontSize: 40 }} />
                                        </IconButton>                         
                                        <Typography variant="h5" align="center" color="white" paragraph>LinkedIn</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box sx={{height: 'auto', mt: 5, ml: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <Stack>
                                        <IconButton href='https://github.com/dominicpelino'>
                                            <GitHubIcon color='secondary' sx={{ fontSize: 40 }} />
                                        </IconButton>
                                        <Typography variant="h5" align="center" color="white" paragraph>Github</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <Box sx={{height: 'auto', mt: 5, ml: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                    <Stack>
                                        <IconButton href='https://drive.google.com/file/d/1XU1WWUHgFIV360FSfdhoiqffOGZyoiYj/view?usp=sharing'>
                                            <InsertDriveFileIcon color='secondary' sx={{ fontSize: 40 }} />
                                        </IconButton>
                                        <Typography variant="h5" align="center" color="white" paragraph>Resume</Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Main>
            <Box sx={{ p: 6 }} component="footer">
                <Typography variant="h5" align="center" color="secondary" gutterBottom>
                Contact
                </Typography>
                <Typography variant="h6" align="center" color="white" paragraph>
                    <Stack>Tacoma, Washington</Stack>
                    <Stack>614.592.9207</Stack>
                    <Tooltip title="Email Me" arrow>
                        <IconButton href='mailto:pelinodominic@gmail.com'>
                            <EmailIcon color='secondary' sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <hr></hr>
            </Box>
        </Root>
    )
};