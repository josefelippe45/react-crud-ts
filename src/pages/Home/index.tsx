import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Container,
  ProfileColumn,
  PostColumn,
  NewsRow,
  Card,
  ContentContainer,
} from './styles';
import api from 'services';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import fetchNews from 'services/newsApi';
import jwt from 'jwt-decode';

interface IUser {
  name: string;
  email: string;
}
interface IUserId {
  iat?: string;
  _id: string;
}

interface IProvider {
  image: IImage;
  name: string;
}
interface IImage {
  thumbnail: {
    contentUrl: string;
  };
}
interface INews {
  datePublished: string;
  description: string;
  image: IImage;
  name: string;
  provider: IProvider[];
  url: string;
}

const Home: FC = () => {
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState('');
  const [news, setNews] = useState<INews[]>();
  const [newsToShow, setNewsToShow] = useState(3);
  const token = Cookies.get('auth-token');
  const userId: IUserId = jwt(token || '');
  const getUser = useCallback(async () => {
    try {
      const user: AxiosResponse<IUser> = await api.get(`/users/${userId._id}`, {
        headers: { auth_token: Cookies.get('auth-token') },
      });
      return setUser(user.data);
    } catch (error) {
      console.log(error);
      setError('User not found :(');
      setUser(user);
    }
  }, [user, userId]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetchNews();
      return setNews(response.value);
    };
    getNews();
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const newsItems = news
    ?.filter((hasImage) => hasImage.image)
    .filter((_, index) => index < newsToShow);
  const handleShowMore = useCallback(() => {
    setNewsToShow((news) => news + 3);
  }, [setNewsToShow]);
  const handleShowLess = useCallback(() => {
    setNewsToShow((news) => news - 3);
  }, [setNewsToShow]);
  const newsArrayLength = news?.filter((hasImage) => hasImage.image).length;
  return (
    <Container>
      {error && <div>{error}</div>}
      <ContentContainer>
        <NewsRow>
          {newsItems && newsItems.length > 3 && (
            <button onClick={handleShowLess}>click me</button>
          )}
          {newsItems &&
            newsItems
              .map((props, i) => (
                <Card key={i}>
                  <a href={props.url} target="_blank" rel="noreferrer">
                    <div>
                      <img
                        src={props.provider[0]?.image?.thumbnail?.contentUrl}
                        alt=""
                      />
                      <p>{props.provider[0]?.name}</p>
                      <span>{props.datePublished.split('T')[0]}</span>
                    </div>
                    <p>{props.name}</p>
                    <div>
                      <img
                        src={props.image?.thumbnail?.contentUrl}
                        alt="news-highlight"
                      />
                      <p>{props.description.slice(0, 88)}...</p>
                    </div>
                  </a>
                </Card>
              ))
              .slice(newsToShow - 3, newsToShow)}
          {newsItems && newsArrayLength !== newsItems.length && (
            <button onClick={handleShowMore}>click me</button>
          )}
        </NewsRow>
        <ProfileColumn></ProfileColumn>
        <PostColumn></PostColumn>
      </ContentContainer>
    </Container>
  );
};

export default Home;
