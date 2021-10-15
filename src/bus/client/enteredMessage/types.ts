// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type EnteredMessage = string;

// Contracts
export type SetEnteredMessageContract = CaseReducer<
EnteredMessage,
PayloadAction<EnteredMessage>
>;
export type ResetEnteredMessageContract = CaseReducer<EnteredMessage>;
