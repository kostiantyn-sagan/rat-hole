// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type User = {
    _id: string | null;
    username: string | null
};

export type UserState = User

// Contracts
export type SetUserContract = CaseReducer<UserState, PayloadAction<User>>;
