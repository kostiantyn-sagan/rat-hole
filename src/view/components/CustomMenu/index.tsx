// Core
import React, { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';

// Types
import * as Types from '../../../bus/profile/types';

type PropTypes = {
    username: Types.User['username'];
    logoutHandler: () => void
};

export const CustomMenu: FC<PropTypes> = ({ username, logoutHandler }) => (
    <Box>
        <Typography
            gutterBottom
            component = 'div'
            variant = 'h3'>
            { username }
        </Typography>
        <Button
            variant = 'text'
            onClick = { logoutHandler }>Logout
        </Button>
    </Box>
);
