// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { RegistrationForm } from '../pages';

export const Public: FC = () => {
    return (
        <Switch>
            <Route
                exact
                path = '/register'>
                <RegistrationForm />
            </Route>
            <Redirect to = '/register' />
        </Switch>
    );
};
