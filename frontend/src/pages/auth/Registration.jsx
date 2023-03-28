import React from 'react';
import RegistrationForm from '../../components/RegistrationForm';
import register from '../../features/Auth/authService' 

const Registration = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		
		const registerData = {
		  email : e.target.email.value,
		  username : e.target.username.value,
		  password : e.target.password.value
		};
		register(registerData);
	  };
	return(
	<div className ="registration-form__container">
	<RegistrationForm  onSubmit = {onSubmit}/>
	</div>
	);
};

export default Registration;
