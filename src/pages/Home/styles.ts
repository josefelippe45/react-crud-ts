import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  height: calc(100vh - 67px);
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.colors.primary};
  color: white;
  width: 367px;
  border-radius: 8px;
  > p {
    width: 65%;
  }
  > h1 {
    font-size: 22px;
    margin: 30px 0;
  }
  > div:last-child {
    margin-bottom: 30px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid white;
  border-radius: 10px;
  width: 65%;
  margin: 20px 0;
`;
