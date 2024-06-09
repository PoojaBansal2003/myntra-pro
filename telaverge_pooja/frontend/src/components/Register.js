// components/Register.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83vh;
  background-color: #f5f5f5; /* Light gray background */
`;

const RegisterForm = styled.form`
  background-color: #ffffff; /* White background */
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 18px;
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
  background-color: rgb(191, 64, 191); /* Blue background */
  color: #ffffff; /* White text color */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    email : '',
    password: '',
  });

  const navi = useNavigate();
  // const navi = useNavigation();

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log("Start Registering with  - " + credentials)
      await axios.post("http://localhost:5000/api/auth/register",credentials, {
        headers: {
          'Content-Type': 'application/json', 
        }})
      console.log("Success full register");
      navi('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Register</Title>
        <Input type="text" placeholder="Username" name='username' value={credentials.username}
          onChange={handleChange}/>
        <Input type="email" placeholder="Email"name='email' value={credentials.email}
          onChange={handleChange}/>
        <Input type="password" placeholder="Password"name='password' value={credentials.password}
          onChange={handleChange}/>
        <Button type="submit" >Register</Button>
      </RegisterForm>
    </Container>
  );
};

export default Register;
