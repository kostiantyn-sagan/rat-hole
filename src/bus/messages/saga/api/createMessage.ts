// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const createMessage: (
    text: string,
    username: string
) => Promise<types.Message> = async (text, username) => {
    const response = await fetch(`${API_URL}/messages`, {
        method:  'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, username }),
    });

    if (response.status !== 201) {
        throw new ControlledError({
            message:    'createMessage failed',
            statusCode: response.status,
            data:       {
                test: '123',
            },
        });
    }

    return response.json();
};
