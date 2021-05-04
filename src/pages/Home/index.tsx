import React, { FC, useEffect, useState } from 'react';
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

const Home: FC = () => {
  const [user, setUser] = useState<AxiosResponse<IUser>>();
  const [error, setError] = useState('');
  const location = useLocation<ILocation>();
  const getUser = async () => {
    try {
      const user: AxiosResponse<IUser> = await api.get(
        `/users/${location.state.userId._id}`,
        {
          headers: { auth_token: Cookies.get('auth-token') },
        }
      );
      return setUser(user);
    } catch (error) {
      console.error(error);
      setError('User not found :(');
      setUser(user);
    }
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <ProfileColumn>
        {error && <div>{error}</div>}
        <Card>
          <p>{user && user.data.name}</p>
        </Card>
      </ProfileColumn>
      <PostColumn></PostColumn>
      <NewsColumn></NewsColumn>
    </Container>
  );
};

export default Home;
