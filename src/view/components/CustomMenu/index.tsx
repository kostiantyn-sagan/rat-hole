// Core
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// Redux
import { useProfile } from '../../../bus/profile';


export const CustomMenu = () => {
    const { profile: { username }, logout } = useProfile();

    return (
        <Box>
            <Typography
                gutterBottom
                component = 'div'
                variant = 'h3'>
                { username }
            </Typography>
            <Button
                variant = 'text'
                onClick = { logout }>Logout
            </Button>
        </Box>
    );
};
