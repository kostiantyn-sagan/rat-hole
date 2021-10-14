// Core
import React, { FC } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Hooks
import { useForm } from '../../../tools/hooks';

type PropTypes = {
    createMessage: (text: string) => void;
};

export const MessageInputField: FC<PropTypes> = ({ createMessage }) => {
    const [ form, handleChange, , resetForm ] = useForm({
        text: '',
    });

    const sendHandler = () => {
        createMessage(form.text);
        resetForm();
    };

    return (
        <Paper
            component = 'form'
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            onSubmit = { (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            } }>
            <InputBase
                autoComplete = 'off'
                inputProps = {{ 'aria-label': 'enter message' }}
                name = 'text'
                placeholder = 'Еnter message'
                sx = {{ ml: 1, flex: 1 }}
                value = { form.text }
                onChange = { (event) => {
                    handleChange(event);
                } }
            />
            <IconButton
                aria-label = 'send'
                disabled = { form.text.trim() === '' }
                sx = {{ p: '10px', color: '#ff874d' }}
                onClick = { sendHandler }>
                <SendIcon />
            </IconButton>
        </Paper>
    );
};
