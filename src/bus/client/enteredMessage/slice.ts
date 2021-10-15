// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { EnteredMessage } from './types';

// Reducers
import * as reducers from './cases';

export const initialState: EnteredMessage = '';

export const enteredMessageSlice = createSlice({
    name: 'enteredMessage',
    initialState,
    reducers,
});

export const enteredMessageActions = enteredMessageSlice.actions;
export default enteredMessageSlice.reducer;
