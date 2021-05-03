import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  height: 67px;
  width: 100%;
  background: ${(p) => p.theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  > button {
    margin-right: 30px;
  }
`;
