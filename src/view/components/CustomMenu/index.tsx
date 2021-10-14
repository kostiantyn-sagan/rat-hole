// Core
import React, { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';

// Types
import * as Types from '../../../bus/profile/types';

type PropTypes = {
    username: Types.User['username'];
    logoutHandler: () => void;
};

export const CustomMenu: FC<PropTypes> = ({ username, logoutHandler }) => (
    <Box
        sx = {{
            mb:             '10px',
            display:        'flex',
            justifyContent: 'space-evenly',
            alignItems:     'center',
        }}>
        <Typography
            component = 'div'
            variant = 'h6'>
            {username}
        </Typography>
        <Button
            sx = {{ backgroundColor: '#ff874d' }}
            variant = 'contained'
            onClick = { logoutHandler }>
            Logout
        </Button>
    </Box>
);
