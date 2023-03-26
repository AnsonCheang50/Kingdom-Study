import React from 'react';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    
    const loginData = {
      username : e.target.username.value,
      password : e.target.password.value
    };
    console.log(loginData);
  };

  return (
	<div className ="login-form__container">
    <LoginForm onSubmit = {onSubmit}/> 
  </div>
  );
};

export default Login;