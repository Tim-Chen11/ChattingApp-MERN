import React from 'react';
import Box from '@mui/material/Box'
import { styled } from '@mui/system'


const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})


const AuthBox = (props) => {
    return (
        <BoxWrapper>
            <Box>
                {props.children}
            </Box>
        </BoxWrapper>
    );
};

export default AuthBox;