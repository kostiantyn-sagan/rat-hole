// Core
import React, { FC, useLayoutEffect, useRef } from 'react';
import moment from 'moment';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useEnteredMessage } from '../../../bus/client/enteredMessage';
import { useMessageEditingId } from '../../../bus/client/messageEditingId';

// Tools
import { useSelector } from '../../../tools/hooks';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/messages/types';
import { User } from '../../../bus/profile/types';

type PropTypes = {
    messages: Types.MessagesState;
    loggedinUsername: User['username'];
};

export const ChatBox: FC<PropTypes> = ({ messages, loggedinUsername }) => {
    const { setInputFieldText } = useEnteredMessage();

    const { setMessageEditingId } = useMessageEditingId();

    const { setTogglerAction } = useTogglersRedux();

    const chatBoxEl = useRef<null | HTMLUListElement>(null);

    const { username: myName } = useSelector((state) => state.profile);

    useLayoutEffect(() => {
        if (chatBoxEl.current) {
            chatBoxEl.current.scrollTo({
                top: chatBoxEl.current.scrollHeight,
            });
        }
    }, [ messages[ 0 ]?._id ]);

    const onEditBtnClick = (
        text: Types.Message['text'],
        id: Types.Message['_id'],
    ) => {
        setInputFieldText(text);

        setMessageEditingId(id);

        setTogglerAction({
            type:  'isMessageEditing',
            value: true,
        });

        setTogglerAction({
            type:  'showModal',
            value: true,
        });
    };

    const ondDeleteBtnClick = (id: Types.Message['_id']) => {
        setMessageEditingId(id);

        setTogglerAction({
            type:  'isMessageDeleting',
            value: true,
        });

        setTogglerAction({
            type:  'showModal',
            value: true,
        });
    };

    return (
        <S.StyledChatBox ref = { chatBoxEl }>
            {messages
                .map(({ _id, username, text, createdAt, updatedAt }) => (
                    <S.ChatBoxItem
                        key = { _id }
                        style = {
                            username === myName
                                ? { marginLeft: 'auto', marginRight: '0' }
                                : {}
                        }>
                        <S.Username>{username}</S.Username>
                        <S.Text>{text}</S.Text>
                        {username === loggedinUsername && (
                            <div>
                                <button
                                    type = 'button'
                                    onClick = { () => onEditBtnClick(text, _id) }>
                                    Edit
                                </button>
                                <button
                                    type = 'button'
                                    onClick = { () => ondDeleteBtnClick(_id) }>
                                    Delete
                                </button>
                            </div>
                        )}
                        <S.Container>
                            {moment(createdAt).valueOf() !== moment(updatedAt).valueOf() && (
                                <S.StatusEdited>edited</S.StatusEdited>
                            )}
                            <S.Time>{moment(createdAt).format('LT')}</S.Time>
                        </S.Container>
                    </S.ChatBoxItem>
                ))
                .reverse()}
        </S.StyledChatBox>
    );
};
