import styled from 'styled-components';

interface IContainer {
  outline?: boolean;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => (p.outline ? 'transparent' : '#ffff')};
  border: 2px solid white;
  border-radius: 12px;
  outline: #ffff;
  border: 2px solid white;
  width: fit-content;
  height: fit-content;
  padding: 7px;
  cursor: pointer;
  color: white;
`;
