import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #ddd;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleLink = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
 
    navigate('/dashboard'); 
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    navigate('/dashboard');
  };

  return (
    <Container>
      {isLogin ? (
        <div>
          <h1>Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" aria-label="Email" required />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" aria-label="Password" required />
            <Button type="submit">Login</Button>
          </Form>
          <p>
            Don't have an account?
            <ToggleLink to="#" onClick={() => setIsLogin(false)}>
              Signup
            </ToggleLink>
          </p>
        </div>
      ) : (
        <div>
          <h1>Signup</h1>
          <Form onSubmit={handleSignupSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" aria-label="Name" required />
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" aria-label="Email" required />
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" name="password" aria-label="Password" required />
            <Button type="submit">Signup</Button>
          </Form>
          <p>
            Already have an account?
            <ToggleLink to="#" onClick={() => setIsLogin(true)}>
              Login
            </ToggleLink>
          </p>
        </div>
      )}
    </Container>
  );
}

export default LoginSignup;