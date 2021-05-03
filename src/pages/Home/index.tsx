import React, { FC, useEffect, useState } from 'react';
import { Container, CardContainer, Card } from './styles';
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
  }, []);
  return (
    <Container>
      {error && <div>{error}</div>}
      <CardContainer>
        <h1>List of users</h1>
        {users?.data.map((user, i) => (
          <>
            <p>User: {i + 1}</p>
            <Card>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </Card>
          </>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
