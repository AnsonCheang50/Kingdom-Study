import React from 'react';

const RegistrationForm = (props) => {
  return (
    <form onSubmit = {props.onSubmit} >
        <div className='form-controls'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" /> 
        </div>   
        <div className='form-controls'>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" /> 
        </div>
        <div className='form-controls'>
            <label htmlFor="password">Password:</label>
            <input type="text" id="password" name="password" /> 
        </div>
        <div className='form-controls'>
            <label htmlFor="password2">Confirm Password:</label>
            <input type="text" id="password2" name="password2" /> 
        </div>
        <button className='btn' type="submit" value="Sign in">Login</button>
    </form>
  );
};

export default RegistrationForm;