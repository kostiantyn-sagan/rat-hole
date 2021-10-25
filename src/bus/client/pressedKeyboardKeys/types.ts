// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// Types
export type PressedKey = number
export type PressedKeysState = Array<PressedKey>;

// Contracts
export type SetPressedKeyContract = CaseReducer<
PressedKeysState,
PayloadAction<PressedKey>
>;
export type DeletePressedKeyContract = CaseReducer<
PressedKeysState,
PayloadAction<PressedKey>
>;
