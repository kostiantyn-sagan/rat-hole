// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

export type MessageEditingId = string;

// Contracts
export type SetMessageEditingIdContract = CaseReducer<
MessageEditingId,
PayloadAction<MessageEditingId>
>;
