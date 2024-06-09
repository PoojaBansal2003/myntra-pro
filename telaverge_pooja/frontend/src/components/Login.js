// components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../store/actions/authActions';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83vh; /* Adjust to min-height to avoid collision with navbar */
  background-color: #f5f5f5; /* Light gray background */
`;

const LoginForm = styled.form`
  background-color: #ffffff; /* White background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
  margin-top: -26px;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333333; /* Dark gray color */
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #cccccc; /* Light gray border */
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: rgb(191, 64, 191); /* Purple background */  
  color: #ffffff; /* White text color */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials)); // Dispatch login action
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </Container>
  );
};

export default Login;
