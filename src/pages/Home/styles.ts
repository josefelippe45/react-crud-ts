import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${(p) => p.theme.colors.primary};
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 100%;
  margin: 20px 0;
  > a {
    color: white;
    cursor: pointer;
    text-decoration: none;

    @media (max-width: 950px) {
      > p {
        font-size: 14px;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      @media (max-width: 950px) {
        > p {
          font-size: 12px;
        }
      }
      > p {
        font-size: 14px;
        overflow: hidden;
        max-height: 79px;
        margin: 0 10px;
      }
      > img {
        height: 80px;
      }
    }
    > p {
      margin: 0 0 20px 0;
    }
    > div:first-of-type {
      display: flex;
      margin: 0 0 10px 0;
      align-items: center;
      justify-content: space-between;

      > img {
        width: 20px;
        height: 20px;
      }
      > p {
        font-weight: 500;
        font-size: 14px;
        text-align: center;
      }
      > span {
        font-weight: 500;
        font-size: 10px;
        text-align: center;
      }
    }
  }
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
`;

export const NewsRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  > h1 {
    color: white;
    text-align: center;
  }
  > div {
    margin: 0 10px;
    height: 300px;
  }
`;
