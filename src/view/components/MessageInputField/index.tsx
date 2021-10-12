// Core
import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const MessageInputField = () => (
    <Paper
        component = 'form'
        sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase
            inputProps = {{ 'aria-label': 'enter message' }}
            placeholder = 'Еnter message'
            sx = {{ ml: 1, flex: 1 }}
        />
        <IconButton
            aria-label = 'send'
            color = 'primary'
            sx = {{ p: '10px' }}
            type = 'submit'>
            <SendIcon />
        </IconButton>
    </Paper>
);
