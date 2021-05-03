import Button from 'components/Button';
import React, { FC, useState } from 'react';
import Cookies from 'js-cookie';
import api from 'services';
import {
  Container,
  Form,
  FormContainer,
  Input,
  InputContainer,
} from './styles';
import { useHistory } from 'react-router';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useHistory();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPassword('');
    try {
      const token = await api.post('/login', {
        email,
        password,
      });
      const { token: authToken } = token.data;
      token.status === 200 &&
        Cookies.set('auth-token', authToken, {
          sameSite: 'strict',
        });
      navigate.push('/home');
    } catch (error) {
      console.error(error);
      return alert('Please check your information');
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2>Login</h2>
        <Form>
          <InputContainer>
            <label>Email: </label>
            <Input
              type="text"
              required
              value={email}
              placeholder="Type here..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <label>Password: </label>
            <Input
              type="password"
              required
              value={password}
              placeholder="Type here..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
        </Form>
        <Button outline text="Login" onClick={handleSubmit} />
        <p>
          Don't have an account? <a href="/register">Sign up here!</a>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Login;
