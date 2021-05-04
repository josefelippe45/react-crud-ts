import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background: ${(p) => p.theme.colors.primary};
  height: calc(100vh - 67px);
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  align-self: center;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  width: 90%;
  margin: 20px 0;
`;
export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
`;

export const PostColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  border-left: 1px solid #c2c2c2;
  border-right: 1px solid #c2c2c2;
`;

export const NewsColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  overflow-y: auto;
`;
