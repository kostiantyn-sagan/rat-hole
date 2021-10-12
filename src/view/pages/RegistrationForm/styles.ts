import styled from 'styled-components';

export const Form = styled.form`
position: fixed;
top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
margin-left: auto;
margin-right: auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 40px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
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

  &::placeholder {
    font: inherit;
  font-size: 18px;
  }
`;
