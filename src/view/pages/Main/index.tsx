// Core
import React from 'react';

// Components
import { ErrorBoundary, CustomMenu, ChatBox, MessageInputField } from '../../components';

// Styles
import { Container } from './styles';

const Main = () => (
    <Container>
        <CustomMenu/>
        <ChatBox/>
        <MessageInputField/>
    </Container>
);

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
