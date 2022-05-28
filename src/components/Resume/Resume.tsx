import React from 'react';
import { styled } from '@mui/system';

import { HeroMenu, Nav, Overlay } from '../Home';

import code_image from '../../assets/images/code.jpg';

//  Styles
const File = styled('main')({
    height: '100%',
    top: '0%',
    left: '60%',
    transform: 'translate(-50%)',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
});
const ResumeMain = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${code_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: '-1'
});

export const Resume = () => {
    return (
        <>
            <ResumeMain>
                <Overlay/>
                <Nav/>
                <HeroMenu/>
                    <File>
                        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTNrvOCoUHpWeFC_cKdJuk_8SKjZ4QsiXdkOq1PrNqjp9YktMRnvhQTVT8TETPey8IKx6kH5TSQE-pS/pub?embedded=true" 
                        width="830px" height="100%"></iframe>
                    </File>
            </ResumeMain>
        </>
    )
};