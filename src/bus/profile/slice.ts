// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { UserState } from './types';

// Reducers
import * as reducers from './cases';

export const initialState: UserState = {
    _id:      null,
    username: null,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers,
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
