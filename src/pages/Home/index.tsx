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
import { useHistory, useLocation } from 'react-router';
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
  const [user, setUser] = useState<IUser>();
  const [error, setError] = useState('');
  const [news, setNews] = useState<INews[]>();
  const location = useLocation<ILocation>();
  const navigate = useHistory();
  const getUser = useCallback(async () => {
    try {
      const user: AxiosResponse<IUser> = await api.get(
        `/users/${location.state.userId._id}`,
        {
          headers: { auth_token: Cookies.get('auth-token') },
        }
      );
      return setUser(user.data);
    } catch (error) {
      setError('User not found :(');
      setUser(user);
    }
  }, [location, user]);

  useEffect(() => {
    const getNews = async () => {
      const response = await fetchNews();
      return setNews(response.value);
    };
    getNews();
    getUser();
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
      <NewsColumn>
        <h1>Latest News</h1>
        {news &&
          news
            .filter((hasImage) => hasImage.image)
            .map((props, i) => (
              <Card href={props.url} target="_blank">
                <div>
                  <img
                    src={
                      props.provider &&
                      props.provider[0] &&
                      props.provider[0].image &&
                      props.provider[0].image.thumbnail.contentUrl
                    }
                    alt=""
                  />
                  <p>
                    {props &&
                      props.provider &&
                      props.provider[0] &&
                      props.provider[0].name}
                  </p>
                  <span>{props.datePublished.split('T')[0]}</span>
                </div>
                <p>{props.name}</p>
                <div>
                  <img
                    src={
                      props &&
                      props.image &&
                      props.image.thumbnail &&
                      props.image.thumbnail.contentUrl
                    }
                    alt="news-highlight"
                  />
                  <p>{props.description}</p>
                </div>
              </Card>
            ))}
      </NewsColumn>
    </Container>
  );
};

export default Home;
