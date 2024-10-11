import { KeyboardEvent, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';

const Login = () => {
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isRequestError, setIsRequestError] = useState(false);
	const [header, setHeader] = useState('SECRET SITE');

	const loginHandler = () => {
		axios
			.post('http://localhost:8080/api/v1/login', { login, password })
			.then((r) => {
				console.log(r);
			})
			.catch(() => {
				setIsRequestError(true);
				setHeader('LOGIN ERROR');
			});
	};
	const enterHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			loginHandler();
			// @ts-ignore
			e.target.blur();
		}
	}, []);

	useEffect(() => {
		if (!isRequestError) setHeader('SECRET SITE');
	}, [isRequestError]);

	return (
		<div className="relative flex items-center justify-center w-dvw h-dvh">
			<div
				className={classNames(
					{ 'text-red-800': isRequestError },
					'absolute text-[50px] sm:text-[80px] top-10 sm:top-40 text-primary-green select-none cursor-none',
				)}
			>
				{header}
			</div>
			<div className="flex items-center gap-2">
				<div className="flex flex-col gap-3">
					<input
						placeholder="Login"
						className={classNames(
							{ 'border-red-800 text-red-800': isRequestError },
							'p-1 px-2 bg-primary-black placeholder-accent text-primary-green border-2 border-primary-green rounded-xl focus:border-accent outline-0',
						)}
						onFocus={() => setIsRequestError(false)}
						onChange={(v) => setLogin(v.target.value)}
						onKeyDown={enterHandler}
					/>
					<input
						type="password"
						placeholder="Password"
						className={classNames(
							{ 'border-red-800 text-red-800': isRequestError },
							'p-1 px-2 bg-primary-black placeholder-accent text-primary-green border-2 border-primary-green rounded-xl focus:border-accent outline-0',
						)}
						onFocus={() => setIsRequestError(false)}
						onChange={(v) => setPassword(v.target.value)}
						onKeyDown={enterHandler}
					/>
				</div>
				<div
					className={classNames(
						{ 'text-red-800': isRequestError },
						'text-accent text-3xl hover:text-text cursor-pointer',
					)}
					onClick={loginHandler}
				>
					{'->'}
				</div>
			</div>
		</div>
	);
};

export default Login;
