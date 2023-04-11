import { React, useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
	FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';

import authService from '../../features/Auth/authService';
import './Register.css';

const EMAIL_REGEX =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{5,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

const Registration = (props) => {
	const emailRef = useRef();
	const userRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [user, setUser] = useState('');
	const [validName, setValidName] = useState(false);
	const [userFocus, setUserFocus] = useState(false);

	const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = EMAIL_REGEX.test(email);
		console.log(result);
		console.log(email);
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = USER_REGEX.test(user);
		console.log(result);
		console.log(user);
		setValidName(result);
	}, [user]);

	useEffect(() => {
		const result = PWD_REGEX.test(pwd);
		console.log(result);
		console.log(pwd);
		setValidPwd(result);
		const match = pwd === matchPwd;
		setValidMatch(match);
	}, [pwd, matchPwd]);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd, matchPwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const v1 = EMAIL_REGEX.test(email)
		const v2 = USER_REGEX.test(user);
		const v3 = PWD_REGEX.test(pwd);
		if (!v1 || !v2 || !v3) {
			setErrMsg('Invalid Entry');
			return;
		}

		try {
			const response = await authService.register({
				email,
				username: user,
				password: pwd,
			});
			setSuccess('true');
			setEmail('');
			setUser('');
			setPwd('');
			navigate('/login');
		} catch (error) {
			console.error(error);
		}		
	};

	return (
		<>
			{success ? (
				<section>
					<h1>Success!</h1>
					<p>
						<NavLink to='/login'>Login</NavLink>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? 'errmsg' : 'offscreen'}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Register</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email">
							Email:
							<FontAwesomeIcon
								icon={faCheck}
								className={validEmail ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validEmail || !email ? 'hide' : 'invalid'
								}
							/>
						</label>
						<input
							type="email"
							id="email"
							ref={emailRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							required
							aria-invalid={validEmail ? 'false' : 'true'}
							aria-describedby="emailnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						/>
						<p
							id="emailnote"
							className={
								emailFocus && email && !validEmail
									? 'instructions'
									: 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must be a valid email.
						</p>

						<label htmlFor="username">
							Username:
							<FontAwesomeIcon
								icon={faCheck}
								className={validName ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validName || !user ? 'hide' : 'invalid'
								}
							/>
						</label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setUser(e.target.value)}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setUserFocus(true)}
							onBlur={() => setUserFocus(false)}
						/>
						<p
							id="uidnote"
							className={
								userFocus && user && !validName
									? 'instructions'
									: 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							6 to 24 characters.
							<br />
							Must begin with a letter
							<br />
							Letters, numbers, underscores,
							<br /> hyphens allowed.
						</p>

						<label htmlFor="password">
							Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={validPwd ? 'valid' : 'hide'}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validPwd || !pwd ? 'hide' : 'invalid'
								}
							/>
						</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							required
							aria-invalid={validPwd ? 'false' : 'true'}
							aria-describedby="pwdnote"
							onFocus={() => setPwdFocus(true)}
							onBlur={() => setPwdFocus(false)}
						/>
						<p
							id="pwdnote"
							className={
								pwdFocus && !validPwd
									? 'instructions'
									: 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							8 to 24 characters.
							<br />
							Must include uppercase and lowercase letters, a
							number and a special character.
							<br />
							Allowed special characters:
							<span aria-label="exclamation mark">!</span>
							<span aria-label="at symbol">@</span>
							<span aria-label="hashtag">#</span>
							<span aria-label="dollar sign">$</span>
							<span aria-label="percent">%</span>
						</p>

						<label htmlFor="confirm_pwd">
							Confirm Password:
							<FontAwesomeIcon
								icon={faCheck}
								className={
									validMatch && matchPwd ? 'valid' : 'hide'
								}
							/>
							<FontAwesomeIcon
								icon={faTimes}
								className={
									validMatch || !matchPwd ? 'hide' : 'invalid'
								}
							/>
						</label>
						<input
							type="password"
							id="confirm_pwd"
							onChange={(e) => setMatchPwd(e.target.value)}
							required
							aria-invalid={validMatch ? 'false' : 'true'}
							aria-describedby="confirmnote"
							onFocus={() => setMatchFocus(true)}
							onBlur={() => setMatchFocus(false)}
						/>
						<p
							id="confirmnote"
							className={
								matchFocus && !validMatch
									? 'instructions'
									: 'offscreen'
							}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
							Must match the first password input field.
						</p>
						<button
							disabled={
								!validName || !validPwd || !validMatch
									? true
									: false
							}
						>
							Sign Up
						</button>
					</form>
					<p>
						Already registered?
						<br />
						<span className="line">
							<Link to="/login">Login</Link>
						</span>
					</p>
				</section>
			)}
		</>
	);
};

export default Registration;
