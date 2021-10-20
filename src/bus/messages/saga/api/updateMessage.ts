// Tools
import { ControlledError } from '../../../../tools/utils';
import { API_URL } from '../../../../init/constants';

// Types
import * as types from '../../types';

export const updateMessage: (
    text: types.Message['text'],
    id: types.Message['_id']
) => Promise<types.Message> = async (text, id) => {
    const response = await fetch(`${API_URL}/messages/${id}`, {
        method:  'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
    });

    if (response.status !== 200) {
        throw new ControlledError({
            message:    'updateMessage failed',
            statusCode: response.status,
            data:       {
                test: '123',
            },
        });
    }

    return response.json();
};
