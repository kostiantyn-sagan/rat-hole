// Core
import { createSlice } from '@reduxjs/toolkit';

// Types
import { MessageEditingId } from './types';

// Reducers
import * as reducers from './cases';

export const initialState: MessageEditingId = '';

export const messageEditingIdSlice = createSlice({
    name: 'messageEditingId',
    initialState,
    reducers,
});

export const messageEditingIdActions = messageEditingIdSlice.actions;
export default messageEditingIdSlice.reducer;
