import Button from 'components/Button';
import React, { FC, useState } from 'react';
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await api.post('/users', {
        name,
        email,
        password,
      });
      return alert('User registered!');
    } catch (error) {
      console.error(error);
      return alert('Not able to register user');
    }
  };

  return (
    <Container>
      <FormContainer>
        <h2>Create account</h2>
        <Form>
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
        <Button outline text="Register" onClick={handleSubmit} />
        <p>
          Already have an account? <a href="/">Sign in here!</a>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Register;
