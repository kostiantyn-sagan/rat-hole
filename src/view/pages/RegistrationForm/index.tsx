// Core
import React from 'react';
import { Button } from '@mui/material';
import { v4 } from 'uuid';

// Redux
import { useProfile } from '../../../bus/profile';

// Components
import { ErrorBoundary } from '../../components';

// Redux
// import { useFilter } from '../../../bus/client/filters';

// Hooks
import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types & initialState
// import * as T from './types';
// import { DayType } from '../../../bus/days/types';

// type PropTypes = ReturnType<typeof useFilter>

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
        <S.Form>
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
                onClick = { registerHandler }>
                Login
            </Button>
        </S.Form>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationForm />
    </ErrorBoundary>
);

