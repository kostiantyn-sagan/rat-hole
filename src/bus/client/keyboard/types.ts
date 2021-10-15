// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type EnteredKeyboardText = string

// Contracts
export type SetKeyboardTextContract = CaseReducer<EnteredKeyboardText, PayloadAction<EnteredKeyboardText>>;
