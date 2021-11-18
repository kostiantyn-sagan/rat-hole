// Core
import React, { FC, ChangeEvent, useEffect, MutableRefObject } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// Bus
import { useEnteredMessage } from '../../../bus/client/enteredMessage';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Redux store
import { store } from '../../../init';

type PropTypes = {
    createMessage: (text: string) => void;
    messageInputEl: MutableRefObject<HTMLInputElement | null>;
};

export const MessageInputField: FC<PropTypes> = ({
    createMessage,
    messageInputEl,
}) => {
    const {
        togglersRedux: { isMessageEditing },
    } = useTogglersRedux();

    const { enteredMessage, setInputFieldText, resetEnteredMessage }
    = useEnteredMessage();

    const onEnterPressed = (event: KeyboardEvent) => {
        const enteredMessage = store.getState().enteredMessage;

        if (event.code === 'Enter' && enteredMessage !== '') {
            createMessage(enteredMessage);
            resetEnteredMessage();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', onEnterPressed);

        return () => {
            window.removeEventListener('keydown', onEnterPressed);
        };
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputFieldText(event.target.value);
    };

    const sendHandler = () => {
        createMessage(enteredMessage);
        resetEnteredMessage();
    };

    return (
        <Paper
            component = 'form'
            sx = {{ p: '2px 4px', display: 'flex', alignItems: 'center', mb: '8px' }}
            onSubmit = { (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
            } }>
            <InputBase
                autoFocus
                autoComplete = 'off'
                inputProps = {{ 'aria-label': 'enter message' }}
                inputRef = { messageInputEl }
                name = 'text'
                placeholder = 'Еnter message'
                sx = {{ ml: 1, flex: 1 }}
                value = { !isMessageEditing ? enteredMessage : '' }
                onChange = { handleChange }
            />
            <IconButton
                aria-label = 'send'
                disabled = { enteredMessage.trim() === '' || isMessageEditing }
                sx = {{ p: '10px', color: '#247BA0' }}
                onClick = { sendHandler }>
                <SendIcon />
            </IconButton>
        </Paper>
    );
};
