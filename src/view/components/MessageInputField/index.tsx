// Core
import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Hooks
import { useForm } from '../../../tools/hooks';
import { useMessages } from '../../../bus/messages';

export const MessageInputField = () => {
    const [ form, handleChange, , resetForm ] = useForm({
        text: '',
    });

    const { createMessageAsync } = useMessages();

    const sendHandler = () => {
        console.log('нажали send', form);
        createMessageAsync(form.text);
        resetForm();
    };

    return (
        <Paper
            component = 'form'
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
                autoComplete = 'off'
                inputProps = {{ 'aria-label': 'enter message' }}
                name = 'text'
                placeholder = 'Еnter message'
                sx = {{ ml: 1, flex: 1 }}
                value = { form.text }
                onChange = { handleChange }
            />
            <IconButton
                aria-label = 'send'
                color = 'primary'
                disabled = { form.text.trim() === '' }
                sx = {{ p: '10px' }}
                onClick = { sendHandler }>
                <SendIcon />
            </IconButton>
        </Paper>
    );
};
