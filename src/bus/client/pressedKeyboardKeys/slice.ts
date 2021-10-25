// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { PressedKeysState } from './types';

// Reducers
import * as reducers from './cases';

const initialState: PressedKeysState = [];

export const pressedKeyboardKeysSlice = createSlice({
    name: '[pressedKeyboardKeys]',
    initialState,
    reducers,
});

export const pressedKeyboardKeysActions = pressedKeyboardKeysSlice.actions;
export default pressedKeyboardKeysSlice.reducer;
