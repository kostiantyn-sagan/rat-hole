// Core
import React, { FormEvent } from 'react';
import { Button } from '@mui/material';
import { v4 } from 'uuid';

// Redux
import { useProfile } from '../../../bus/profile';

// Components
import { ErrorBoundary } from '../../components';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

const RegistrationForm = () => {
    const [ form, handleChange ] = useForm({
        username: `RAT:${v4().slice(0, 5)}`,
    });
    const { registerUserAsync } = useProfile();

    const registerHandler = () => {
        if (form.username) {
            registerUserAsync(form.username);
        }
    };

    return (
        <S.CenteredContainer>
            <S.Form onSubmit = { (event:FormEvent) =>event.preventDefault() }>
                <S.Input
                    autoFocus
                    autoComplete = 'off'
                    name = 'username'
                    placeholder = 'Enter your ratname'
                    value = { form.username }
                    onChange = { handleChange }
                />
                <Button
                    size = 'large'
                    sx = {{ backgroundColor: '#ff874d' }}
                    type = 'submit'
                    variant = 'contained'
                    onClick = { registerHandler }>
                    Login
                </Button>
            </S.Form>
        </S.CenteredContainer>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationForm />
    </ErrorBoundary>
);
