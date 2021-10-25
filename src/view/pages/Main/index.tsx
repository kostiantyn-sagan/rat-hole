// Core
import React from 'react';
import Button from '@mui/material/Button';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useProfile } from '../../../bus/profile';
import { useMessages } from '../../../bus/messages';
import { usePressedKeyboardKeys } from '../../../bus/client/pressedKeyboardKeys';

// Components
import {
    ErrorBoundary,
    CustomMenu,
    ChatBox,
    MessageInputField,
    Keyboard,
    Modal,
    MessageEditor,
    PopupDeleteMessage,
} from '../../components';

// Styles
import { Container, CenteredContainer, ChatContainer } from './styles';

const Main = () => {
    const {
        setTogglerAction,
        togglersRedux: {
            showModal,
            isMessageEditing,
            isMessageDeleting,
            enableKeyboard,
        },
    } = useTogglersRedux();

    const {
        profile: { username },
        logout,
    } = useProfile();

    const {
        messages,
        createMessageAsync,
        updateMessageAsync,
        deleteMessageAsync,
    } = useMessages();

    const { pressedKeyboardKeys, setPressedKey, deletePressedKey } = usePressedKeyboardKeys();

    const toggleKeyboardDisplay = () => {
        !enableKeyboard
            ? setTogglerAction({
                type:  'enableKeyboard',
                value: true,
            })
            : setTogglerAction({
                type:  'enableKeyboard',
                value: false,
            });
    };

    return (
        <Container>
            {showModal && (
                <Modal>
                    {isMessageEditing && (
                        <MessageEditor updateMessage = { updateMessageAsync } />
                    )}
                    {isMessageDeleting && (
                        <PopupDeleteMessage deleteMessage = { deleteMessageAsync } />
                    )}
                </Modal>
            )}
            <CenteredContainer>
                <CustomMenu
                    logoutHandler = { logout }
                    username = { username }
                />
                <ChatContainer>
                    <ChatBox
                        loggedinUsername = { username }
                        messages = { messages }
                    />
                    <MessageInputField createMessage = { createMessageAsync } />
                    {enableKeyboard && (
                        <Keyboard
                            createMessage = { createMessageAsync }
                            deletePressedKey = { deletePressedKey }
                            pressedKeyboardKeys = { pressedKeyboardKeys }
                            setPressedKey = { setPressedKey }
                        />
                    )}
                    <Button
                        size = 'large'
                        startIcon = { <KeyboardOutlinedIcon /> }
                        sx = {{
                            backgroundColor: '#ff874d',
                            display:         'flex',
                            ml:              'auto',
                            mr:              'auto',
                        }}
                        variant = 'contained'
                        onClick = { toggleKeyboardDisplay }>
                        {!enableKeyboard ? 'enable keyboard' : 'disable'}
                    </Button>
                </ChatContainer>
            </CenteredContainer>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
