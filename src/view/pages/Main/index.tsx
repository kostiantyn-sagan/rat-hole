// Core
import React from 'react';

// Redux
import { useProfile } from '../../../bus/profile';
import { useMessages } from '../../../bus/messages';

// Components
import {
    ErrorBoundary,
    CustomMenu,
    ChatBox,
    MessageInputField,
} from '../../components';

// Styles
import { Container, CenteredContainer, ChatContainer } from './styles';

const Main = () => {
    const {
        profile: { username },
        logout,
    } = useProfile();
    const { messages, createMessageAsync } = useMessages();

    return (
        <Container>
            <CenteredContainer>
                <CustomMenu
                    logoutHandler = { logout }
                    username = { username }
                />
                <ChatContainer>
                    <ChatBox messages = { messages } />
                    <MessageInputField createMessage = { createMessageAsync } />
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
