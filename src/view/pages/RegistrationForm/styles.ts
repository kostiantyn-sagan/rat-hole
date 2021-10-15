import styled from 'styled-components';

export const CenteredContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
margin-left: auto;
margin-right: auto;
  display: flex;
  align-items: center;
  max-width: 600px;
  padding: 30px;
  background-color: #fff;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.second.chatPageBg};
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 1px 3px rgb(0 0 0 / 12%);
`;

export const Input = styled.input`
  display: inline-block;
  margin-right: 50px;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  line-height: 1.14;
  letter-spacing: 0.01em;
  color: #757575;
  outline: none;
  padding: 8px 14px ;
  background-color: transparent;

  &::placeholder {
    font: inherit;
  font-size: 18px;
  }
`;
