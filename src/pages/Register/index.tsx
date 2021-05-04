import Button from 'components/Button';
import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import api from 'services';
import {
  Container,
  Form,
  FormContainer,
  Input,
  InputContainer,
} from './styles';

const Register: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useHistory();
  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        await api.post('/register', {
          name,
          email,
          password,
        });
        navigate.push('/login');
      } catch (error) {
        console.error(error);
        return alert('Not able to register user');
      }
    },
    [email, name, navigate, password]
  );

  return (
    <Container>
      <FormContainer>
        <h2>Create account</h2>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <label>User name: </label>
            <Input
              type="text"
              required
              value={name}
              placeholder="Type here..."
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
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
        <Button outline text="Register" type="submit" />
        <p>
          Already have an account? <a href="/">Sign in here!</a>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Register;
