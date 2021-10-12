// Core
import React from 'react';
import { Box, ListItem, ListItemText } from '@mui/material';
import { FixedSizeList, ListChildComponentProps  } from 'react-window';

// Redux
import { useMessages } from '../../../bus/messages';

export const ChatBox = () => {
    const { messages } = useMessages();
    console.log('messages внутри ChatBox', messages);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;

        return (
            <ListItem
                divider
                component = 'div'
                key = { index }
                style = { style }>
                <ListItemText primary = { `Item ${index + 1}` } />
            </ListItem>
        );
    }

    return (
        <Box
            sx = {{
                width:    '100%',
                height:   400,
                maxWidth: 360,
                bgcolor:  'background.paper',
            }}>
            <FixedSizeList
                height = { 400 }
                itemCount = { 200 }
                itemSize = { 46 }
                overscanCount = { 5 }
                width = { 360 }>
                {renderRow}
            </FixedSizeList>
        </Box>
    );
};
