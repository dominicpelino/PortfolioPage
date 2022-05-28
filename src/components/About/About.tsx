import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import  ImageList  from '@mui/material/ImageList';
import  ImageListItem  from '@mui/material/ImageListItem';

import { Nav } from '../Home';
//  Background Image
import code_image from '../../assets/images/code.jpg';

//  Grid Images
import backrope_image from '../../assets/images/backrope.jpeg';
import canyoneer_image from '../../assets/images/canyoneer.jpeg';
import helens_image from '../../assets/images/helens.jpg';
import sbsit_image from '../../assets/images/sbsit.jpg';
import spiritlake_image from '../../assets/images/spiritlake.jpg';
import enchant_image from '../../assets/images/enchant.jpeg';

//  Styles
const Root = styled("div")({
    padding: 0,
    margin: 0
});
const AboutMain = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: '-1'
});
const Overlay = styled('main')( {
    backgroundColor: 'black',
    opacity: '50%',
    width: '30%',
    height: '100%',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    zIndex: '0'
});
const AboutText = styled('div')({
    width: '400px',
    textAlign: 'center',
    position: 'absolute',
    top: '60%',
    left: '15%',
    transform: 'translate(-50%, -50%)',
    color: 'rgb(46,125,50)',
    zIndex: '1'
});
const MainDescription = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '25px'
});
const PhotoWall = styled('div')({
    // opacity: '50%',
    position: 'absolute',
    top: '4%',
    right: '4%',
});

export const About = () => {
    return (
        <Root>
{/* Left Text Section */}
            <AboutMain>
                <Overlay/>
                <Nav/>
                <AboutText>
                    <MainDescription>
                        <Typography variant="h6" align="center" color="white" paragraph>
                            I was Born and raised in Ohio but I relocated to Washington in 2012.
                            I have been a resident in the greater Seattle area ever since 
                            and I love living on the westcoast.
                        </Typography>
                    </MainDescription>
                    <MainDescription>
                        <Typography variant="h6" align="center" color="white" paragraph>
                            After over a decade as an Army Ranger and 7 combat deployments; 
                            I seperated honorably to pursue a career in software development. 
                        </Typography>
                    </MainDescription>
                    <MainDescription>
                        <Typography variant="h6" align="center" color="white" paragraph>
                            As a software developer I am excited about the challenge and the creative freedom 
                            that comes with building something new, creating efficiencies, and problem solving. 
                        </Typography>
                    </MainDescription>
                    <MainDescription>
                        <Typography variant="h6" align="center" color="white" paragraph>
                            Outside of work I enjoy all things outdoors. 
                            My favorite hobbies are: 
                            snowboarding, mountaineering, hiking, and canyoneering.
                        </Typography>
                    </MainDescription>
                </AboutText>
            </AboutMain>
{/* Right Photo Section */}
            <PhotoWall>
                <ImageList
                    sx={{ width: 1200, height: 925 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={150}>
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
            </PhotoWall>
        </Root>
    )
};