// Core
import React, { FC, ChangeEvent } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Bus
import { useEnteredMessage } from '../../../bus/client/enteredMessage';

type PropTypes = {
    createMessage: (text: string) => void;
};

export const MessageInputField: FC<PropTypes> = ({ createMessage }) => {
    const { enteredMessage, setInputFieldText, resetEnteredMessage } = useEnteredMessage();

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        setInputFieldText(event.target.value);
    };

    const sendHandler = () => {
        createMessage(enteredMessage);
        resetEnteredMessage();
    };

    return (
        <Paper
            component = 'form'
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: '6px' }}
            onSubmit = { (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            } }>
            <InputBase
                autoComplete = 'off'
                inputProps = {{ 'aria-label': 'enter message' }}
                name = 'text'
                placeholder = 'Еnter message'
                sx = {{ ml: 1, flex: 1 }}
                value = { enteredMessage }
                onChange = { handleChange }
            />
            <IconButton
                aria-label = 'send'
                disabled = { enteredMessage.trim() === '' }
                sx = {{ p: '10px', color: '#ff874d' }}
                onClick = { sendHandler }>
                <SendIcon />
            </IconButton>
        </Paper>
    );
};
