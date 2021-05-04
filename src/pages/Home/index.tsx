import React, { FC, useCallback, useEffect, useState } from 'react';
import {
  Container,
  ProfileColumn,
  PostColumn,
  NewsColumn,
  Card,
} from './styles';
import api from 'services';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router';
import fetchNews from 'services/newsApi';

interface IUser {
  name: string;
  email: string;
}
interface IUserId {
  iat?: string;
  _id?: string;
}
interface ILocation {
  userId: IUserId;
}

interface IProvider {
  image: IImage;
  name: string;
  _type: string;
}
interface IImage {
  isLicensed: boolean;
  thumbnail: {
    contentUrl: string;
    width: number;
    height: number;
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
  const [user, setUser] = useState<AxiosResponse<IUser>>();
  const [error, setError] = useState('');
  const [news, setNews] = useState<INews[]>();
  const location = useLocation<ILocation>();
  const getUser = useCallback(async () => {
    try {
      const user: AxiosResponse<IUser> = await api.get(
        `/users/${location.state.userId._id}`,
        {
          headers: { auth_token: Cookies.get('auth-token') },
        }
      );
      return setUser(user);
    } catch (error) {
      setError('User not found :(');
      setUser(user);
    }
  }, [location, user]);
  const getNews = async () => {
    const res: INews[] = await fetchNews();
    return setNews(res);
  };
  useEffect(() => {
    getUser();
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      {error && <div>{error}</div>}
      <ProfileColumn>
        {/* <Card>
          <p>{user && user.data.name}</p>
        </Card> */}
      </ProfileColumn>
      <PostColumn></PostColumn>
      <NewsColumn></NewsColumn>
    </Container>
  );
};

export default Home;
