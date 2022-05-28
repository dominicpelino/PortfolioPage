import React from 'react';
import { padding, styled } from '@mui/system';
import { 
    Icon, 
    IconButton,
    Button,
    Box,
    Stack,
    Container,
    Tooltip,
    Typography
 } from '@mui/material';
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeIcon from '@mui/icons-material/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//  Background Image
import code_image from '../../assets/images/code.jpg';

// Hero Image
import hero_image from '../../assets/images/hero.jpg';

//  Nav Styles
const AllHIghIcons = styled ('div')({
    textAlign: 'center',
    position: 'absolute',
    top: '10%',
    left: '15%',
    transform: 'translate(-50%)',
    padding: '10px'
});
const HighIcons = styled('div')({
    textAlign: 'center',
    display: 'inline-flex',
    margin: '25px',
    position: 'relative',
});

//  Home Styles
const Root = styled("div")({
    padding: 0,
    margin: 0
});
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: '-1'
});
export const Overlay = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '30%',
    height: '100%',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    zIndex: '0'
});
const MainText = styled('div')({
    width: '400px',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    padding: '10px'
});
const AllLowIcons = styled ('div')({
    textAlign: 'center',
    position: 'absolute',
    bottom: '10%',
    left: '15%',
    transform: 'translate(-50%)',
    padding: '10px'
});
const LowIcons = styled('div')({
    textAlign: 'center',
    display: 'inline-flex',
    margin: '25px',
    position: 'relative',
});

//  HomePage Styles
const HelloBox = styled('div')({
    width: 'auto',
    position: 'absolute',
    top: '27%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
});
const TextBox = styled('div')({
    width: '400px',
    position: 'absolute',
    top: '30%',
    left: '60%',
    transform: 'translate(-50%)',
});
const SkillsBox = styled('div')({
    position: 'absolute',
    bottom: '15%',
    left: '60%',
    transform: 'translate(-50%)',
});
const OverlayTwo = styled ('div')({
    backgroundColor: 'black',
    opacity: '60%',
    width: '100%',
    height: '100%',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    zIndex: '-1'
});

export const Nav = () => {
    return (
        <AllHIghIcons>
            <HighIcons>
                <Tooltip title="About Me" placement='bottom' arrow>
                    <IconButton component={Link} to='/about' >
                        <AccountCircleIcon color='secondary' sx={{ fontSize: 75 }} />
                    </IconButton>
                </Tooltip>
            </HighIcons>
            <HighIcons>
                <Tooltip title="Home" placement='bottom' arrow>
                    <IconButton component={Link} to='/' >
                        <HomeIcon color='secondary' sx={{ fontSize: 75 }} />
                    </IconButton>
                </Tooltip>
            </HighIcons>
            <HighIcons>
                <Tooltip title="Resume Page" placement='bottom' arrow>
                    <IconButton component={Link} to='/resume' >
                        <InsertDriveFileIcon color='secondary' sx={{ fontSize: 75 }} />
                    </IconButton>
                </Tooltip>
            </HighIcons>
        </AllHIghIcons>
    );
};


export const HeroMenu = () => {
    return (
        <>
            <MainText>
                <img src={`${hero_image}`} width='300' height='300'/>
                <h1>DOMINIC PELINO</h1>      
                <h2> Full Stack Developer</h2>
                <h3>Veteran</h3>
                <br></br>
            </MainText>
            <AllLowIcons>
                <LowIcons>
                    <Tooltip title="Github" placement='bottom' arrow>
                        <IconButton href='https://github.com/dominicpelino'>
                            <GitHubIcon color='secondary' sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Tooltip>
                </LowIcons>
                <LowIcons>
                    <Tooltip title="Linkedin" arrow>
                        <IconButton href='https://www.linkedin.com/in/dominic-pelino-038b31208'>
                            <LinkedInIcon color='secondary' sx={{ fontSize: 40 }} />
                        </IconButton>                         
                    </Tooltip>
                </LowIcons>
                <LowIcons>
                    <Tooltip title="Email" arrow>
                        <IconButton href='mailto:pelinodominic@gmail.com'>
                            <EmailIcon color='secondary' sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Tooltip>  
                </LowIcons>     
                <LowIcons>
                    <Tooltip title="Resume Link" arrow>
                        <IconButton href='https://docs.google.com/document/d/e/2PACX-1vS6SRR-CeorK8ao2i0lCawBWM9v8BBJjAlrJc-Be8MsEaICWFz7H8i8D3xmsnK5uRfPuyNLD-GY9rvo/pub'>
                            <InsertDriveFileIcon color='secondary' sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Tooltip>
                </LowIcons>
            </AllLowIcons>
        </>
    )
};

const HomePage = () => {
    return (
        <>
            <HelloBox>
                <OverlayTwo/>
                <Typography variant="h2" align="center" color="secondary">
                    Hello!
                </Typography>
            </HelloBox>
            <TextBox>
                <Typography variant="h5" align="center" color="white" paragraph>
                    <OverlayTwo/>
                    I created this webpage to showcase who I am, and what I like to do.
                    Please look around and feel free to contact me if you have any questions.
                </Typography>
            </TextBox>
            <SkillsBox>
                <Typography variant="h2" align="center" color="secondary">
                    <OverlayTwo/>
                    Skills
                </Typography>
                <Typography variant="h5" align="center" color="white" paragraph>
                    <OverlayTwo/>
                    <p>Python, JavaScript, TypeScript</p>
                    <p>Express, Flask, GraphQL, Node</p>
                    <p>React, Redux, custom-hooks, REST APIs</p> 
                    <p>PostgreSQL, Firebase, MongoDB, PGAdmin4</p> 
                </Typography>
            </SkillsBox>
        </>
    );
};

export const Home = () => {
    return (
        <Root>
            <Main>
                <Overlay/>
                <Nav/>
                <HeroMenu/>
                <HomePage/>
            </Main>
        </Root>
    );
};