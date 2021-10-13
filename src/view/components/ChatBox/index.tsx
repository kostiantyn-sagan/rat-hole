// Core
import React, { FC } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import moment from 'moment';

// Types
import * as Types from '../../../bus/messages/types';

type PropTypes = {
    messages: Types.MessagesState;
};

export const ChatBox: FC<PropTypes> = ({ messages }) => {
    console.log('messages внутри ChatBox', messages);

    return (
        <Box
            sx = {{
                width:     '100%',
                padding:   '40px',
                height:    400,
                maxWidth:  360,
                bgcolor:   'background.paper',
                overflowY: 'scroll',
            }}>
            {messages.map(({ _id, username, text, createdAt, updatedAt }) => (
                <Card
                    key = { _id }
                    sx = {{ maxWidth: 275, mb: '14px', marginRight: 'auto' }}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            color = 'text.secondary'
                            sx = {{ fontSize: 12 }}>
                            {username}
                        </Typography>
                        <Typography
                            gutterBottom>
                            {text}
                        </Typography>
                        <Typography
                            color = 'text.secondary'>
                            {moment(createdAt).format('LT')}
                        </Typography>
                        {moment(createdAt).valueOf() !== moment(updatedAt).valueOf() && <Typography variant = 'body2'>edited</Typography> }
                    </CardContent>
                </Card>
            )).reverse()}
        </Box>
    );
};
