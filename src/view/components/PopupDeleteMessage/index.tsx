// Core
import React, { FC } from 'react';
import Button from '@mui/material/Button';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

type PropTypes = {
    deleteMessage: () => void;
};

export const PopupDeleteMessage: FC<PropTypes> = ({ deleteMessage }) => {
    const { setTogglerAction } = useTogglersRedux();

    const onCancelBtnClick = () => {
        setTogglerAction({
            type:  'showModal',
            value: false,
        });

        setTogglerAction({
            type:  'isMessageDeleting',
            value: false,
        });
    };

    const onDeleteBtnClick = () => {
        deleteMessage();

        setTogglerAction({
            type:  'showModal',
            value: false,
        });

        setTogglerAction({
            type:  'isMessageDeleting',
            value: false,
        });
    };

    return (
        <section>
            <S.Title>Delete message</S.Title>
            <S.Text>Are you sure you want to delete this message?</S.Text>
            <S.Container>
                <Button
                    size = 'large'
                    sx = {{ color: '#247BA0', mr: '84px' }}
                    onClick = { onCancelBtnClick }>
                    Cancel
                </Button>
                <Button
                    size = 'large'
                    sx = {{ color: '#FF1654' }}
                    onClick = { onDeleteBtnClick }>
                    Delete
                </Button>
            </S.Container>
        </section>
    );
};
