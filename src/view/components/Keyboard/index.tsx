// Core
import React from 'react';

// Data
import { keyboardData } from './types';

export const Keyboard = () => {
    const { firstRow, secondRow, thirdRow, fourthRow, fifthRow } = keyboardData;

    return (
        <div>
            <div>
                {firstRow.map(({ enCode }) => <div>{enCode}</div>)}
            </div>
            <div>
                {secondRow.map(({ enCode }) => <div>{enCode}</div>)}
            </div>
            <div>
                {thirdRow.map(({ enCode }) => <div>{enCode}</div>)}
            </div>
            <div>
                {fourthRow.map(({ enCode }) => <div>{enCode}</div>)}
            </div>
            <div>
                {fifthRow.map(({ enCode }) => <div>{enCode}</div>)}
            </div>
        </div>
    );
};
