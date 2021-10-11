// Core
import React from 'react';
import { Button } from '@mui/material';

// Redux
import { useProfile } from '../../../bus/profile';

// Components
import { ErrorBoundary } from '../../components';

// Redux
// import { useFilter } from '../../../bus/client/filters';

// Hooks
// import { useForm } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types & initialState
// import * as T from './types';
// import { DayType } from '../../../bus/days/types';

// type PropTypes = ReturnType<typeof useFilter>

const RegistrationForm = () => {
    const { profile } = useProfile();

    console.log(profile);
    // const [ filterForm, filterFormHandleChange, , resetFilterForm ]
    // = useForm<T.TemperatureInitialState>(T.temperatureInitialState);

    // const [ dayTypeState, setDayTypeState ] = useState<T.DayTypeInitialState>(
    //     T.dayTypeInitialState,
    // );

    // const setDayTypeStateHandler = (dayType: DayType) => void setDayTypeState(
    //     dayType === 'cloudy'
    //         ? { isCloudy: true, isSunny: null }
    //         : { isCloudy: null, isSunny: true },
    // );

    // const isFormfilledHandler = (
    //     form: T.TemperatureInitialState & T.DayTypeInitialState,
    // ) => Object.entries(form).some(([ , value ]) => value !== null);

    // const isReduxFormfilled = isFormfilledHandler(filterData);

    // const isComponentFormfilled = isFormfilledHandler({
    //     ...filterForm,
    //     ...dayTypeState,
    // });

    // const filterHandleSubmit = () => {
    //     if (isReduxFormfilled) {
    //         resetFilterState();
    //         resetFilterForm();
    //         setDayTypeState(T.dayTypeInitialState);

    //         return;
    //     }

    //     setFilterData({ ...filterForm, ...dayTypeState });
    // };

    return (
        <S.Form>
            <S.Input
                autoFocus
                autoComplete = 'off'
                placeholder = 'Enter your ratname'
                type = 'text'
            />
            <Button
                size = 'large'
                type = 'submit'>Drop into hole
            </Button>
        </S.Form>
    );
};

export default () => (
    <ErrorBoundary>
        <RegistrationForm />
    </ErrorBoundary>
);

