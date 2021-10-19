// Core
import React from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useProfile } from '../../../bus/profile';
import { useMessages } from '../../../bus/messages';

// Components
import {
    ErrorBoundary,
    CustomMenu,
    ChatBox,
    MessageInputField,
    Keyboard,
    Modal,
    MessageEditor,
} from '../../components';

// Styles
import { Container, CenteredContainer, ChatContainer } from './styles';

const Main = () => {
    const {
        togglersRedux: { showModal, isMessageEditing },
    } = useTogglersRedux();

    const {
        profile: { username },
        logout,
    } = useProfile();
    const { messages, createMessageAsync } = useMessages();

    return (
        <Container>
            {showModal && (
                <Modal>
                    {isMessageEditing && <MessageEditor/>}
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
                    <Keyboard createMessage = { createMessageAsync } />
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
