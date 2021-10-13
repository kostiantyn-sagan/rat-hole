// Core
import React from 'react';

// Redux
import { useProfile } from '../../../bus/profile';
import { useMessages } from '../../../bus/messages';

// Components
import { ErrorBoundary, CustomMenu, ChatBox, MessageInputField } from '../../components';

// Styles
import { Container } from './styles';

const Main = () => {
    const { profile: { username }, logout } = useProfile();
    const { messages } = useMessages(true);

    return (
        <Container>
            <CustomMenu
                logoutHandler = { logout }
                username = { username }
            />
            <ChatBox messages = { messages }/>
            <MessageInputField/>
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);

