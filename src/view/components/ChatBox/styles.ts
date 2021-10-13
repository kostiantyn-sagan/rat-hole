import styled from 'styled-components';

export const StyledChatBox = styled.ul`
  display: flex;
  height: 370px;
  flex-direction: column;
  width: 600px;
  overflow-y: scroll;
  background-color: rgba(255,255,255,0.1);
`;

export const ChatBoxItem = styled.li`
word-wrap: break-word;

position: relative;
  max-width: 100%;
  border-radius: 4px;
  padding-top: 30px;
    padding-right: 32px;
    padding-bottom: 24px;
    padding-left: 32px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 1px 3px rgb(0 0 0 / 12%);

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const Username = styled.p`
 margin-bottom: 10px;
 font-size: 14px;
 line-height: 1.14;
 color: #afb1b8;
`;

export const Text = styled.p`
 font-size: 16px;
 line-height: 1.14;
 color:#212121;
`;

export const Container = styled.div`
position: absolute;
bottom: 0;
right: 0;
display: flex;
`;

export const Time = styled.p`
 font-size: 14px;
 line-height: 1.14;
 color: rgba(47,48,58,0.8);
`;

export const StatusEdited = styled.p`
margin-right: 8px;
 font-size: 14px;
 line-height: 1.14;
 color: rgba(47,48,58,0.8);
`;

