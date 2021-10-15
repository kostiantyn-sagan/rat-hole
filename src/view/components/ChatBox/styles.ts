import styled from 'styled-components';

export const StyledChatBox = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  height: 430px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  border: 1px solid #afb1b8;
  padding: 10px 32px;
  font-family: Roboto, sans-serif;
  background-color: #d9acd0;
  /* color: ; */
`;

export const ChatBoxItem = styled.li`
  position: relative;
  min-width: 200px;
  max-width: 100%;
  margin-right: auto;
  border-radius: 6px;
  padding: 8px 10px;
  overflow-wrap: break-word;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Username = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: 0.03em;
  color: #ff874d;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.02em;
  color: #212121;
`;

export const Container = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
`;

export const Time = styled.p`
  font-size: 10px;
  letter-spacing: 0.01em;
  color: rgba(47, 48, 58, 0.8);
`;

export const StatusEdited = styled.p`
  margin-right: 4px;
  font-size: 10px;
  letter-spacing: 0.01em;
  color: rgba(47, 48, 58, 0.8);
`;
