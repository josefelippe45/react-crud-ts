import React, { FC, useEffect, useState } from 'react';
import { Container, ProfileColumn, PostColumn, NewsColumn } from './styles';
import api from 'services';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

interface IUsers {
  name: string;
  password: string;
  email: string;
}

const Home: FC = () => {
  const [users, setUsers] = useState<AxiosResponse<IUsers[]>>();
  const [error, setError] = useState('');
  const getUsers = async () => {
    try {
      const users: AxiosResponse<IUsers[]> = await api.get('/users', {
        headers: { auth_token: Cookies.get('auth-token') },
      });
      return setUsers(users);
    } catch (error) {
      console.error(error);
      setError('Users not found :(');
      setUsers(users);
    }
  };
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <ProfileColumn></ProfileColumn>
      <PostColumn></PostColumn>
      <NewsColumn></NewsColumn>
    </Container>
  );
};

export default Home;
