// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { EnteredKeyboardText } from './types';

// Reducers
import * as reducers from './cases';

export const initialState: EnteredKeyboardText = '';

export const keyboardSlice = createSlice({
    name: 'keyboard',
    initialState,
    reducers,
});

export const keyboardActions = keyboardSlice.actions;
export default keyboardSlice.reducer;
