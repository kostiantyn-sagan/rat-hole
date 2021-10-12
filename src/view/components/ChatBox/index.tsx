// Core
import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import moment from 'moment';

// Types
import * as Types from '../../../bus/messages/types';

type PropTypes = {
    messages: Types.MessagesState
};

export const ChatBox: FC<PropTypes> = ({ messages }) => {
    console.log('messages внутри ChatBox', messages);
    // const reversedMessages = messages.length !== 0 ? [ ...messages.reverse() ] : [];
    // console.log('reversedMessages', reversedMessages);

    return (
        <Box sx = {{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper', overflowY: 'scroll' }}>
            {messages.map(({  _id, username, text, createdAt, updatedAt }) => (
                <Card
                    key = { _id }
                    sx = {{ minWidth: 275 }}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            color = 'text.secondary'
                            sx = {{ fontSize: 14 }}>
                            {username}
                        </Typography>
                        <Typography
                            component = 'div'
                            variant = 'h5'>
                            {text}
                        </Typography>
                        <Typography
                            color = 'text.secondary'
                            sx = {{ mb: 1.5 }}>
                            {moment(createdAt).format('LT')}
                        </Typography>
                        <Typography variant = 'body2'>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size = 'small'>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};
