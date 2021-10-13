// Core
import React, { FC, useLayoutEffect, useRef } from 'react';
import moment from 'moment';

// Styles
import * as S from './styles';

// Types
import * as Types from '../../../bus/messages/types';

type PropTypes = {
    messages: Types.MessagesState;
};

export const ChatBox: FC<PropTypes> = ({ messages }) => {
    console.log('messages внутри ChatBox', messages);

    const chatBoxEl = useRef<null | HTMLUListElement>(null);
    console.log(chatBoxEl);

    useLayoutEffect(() => {
        console.log('Давай скролить страницу');
        if (chatBoxEl.current) {
            chatBoxEl.current.scrollTo({
                top: chatBoxEl.current.scrollHeight,
            });
        }
    }, [ messages.length ]);

    return (
        <S.StyledChatBox ref = { chatBoxEl }>
            {messages
                .map(({ _id, username, text, createdAt, updatedAt }) => (
                    <S.ChatBoxItem key = { _id }>
                        <S.Username>{username}</S.Username>
                        <S.Text>{text}</S.Text>
                        {moment(createdAt).valueOf() !== moment(updatedAt).valueOf() && (
                            <S.StatusEdited>edited</S.StatusEdited>
                        )}
                        <S.Time>{moment(createdAt).format('LT')}</S.Time>
                    </S.ChatBoxItem>
                ))
                .reverse()}
        </S.StyledChatBox>
    );
};
