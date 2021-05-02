import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: calc(100vh - 67px);
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #161b28;
  color: white;
  width: 367px;
  height: 367px;
  border-radius: 8px;
  > button {
    width: 70%;
    margin: 15px 0 0 0;
  }
  > p {
    font-size: 14px;
  }
  > a {
    color: white;
    font-weight: 600;
  }
  a:link,
  a:visited {
    color: white;
    font-weight: 600;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  > label {
    margin-bottom: 9px;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid white;
  padding: 7px 5px;
  border-radius: 5px;
  color: white;
  &::placeholder {
    color: #fff9;
  }
`;
