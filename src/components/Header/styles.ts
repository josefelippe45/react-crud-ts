import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 67px;
  width: 100%;
  background: ${(p) => p.theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid #c2c2c2;
  box-shadow: 2px 2px 2px 2px #fff;
  > button {
    margin-right: 30px;
  }
  > button:first-of-type {
    color: ${(p) => p.theme.colors.primary};
    background: white;
  }
`;
