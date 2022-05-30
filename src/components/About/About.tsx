import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import  ImageList  from '@mui/material/ImageList';
import  ImageListItem  from '@mui/material/ImageListItem';

import { Nav, Overlay, BackgroundPic, Root, Main } from '../Home';
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
const AboutText = styled('div')({
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    top: '10%'
});
const MainDescription = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px'
});
const PhotoWall = styled('div')({
    // opacity: '50%',
    position: 'relative',
    top: '10%'
});

export const About = () => {
    return (
        <Root>
{/* Left Text Section */}
            <Main>
                <BackgroundPic />
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
{/* Right Photo Section */}
                <PhotoWall>
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
                </PhotoWall>
            </Main>
        </Root>
    )
};