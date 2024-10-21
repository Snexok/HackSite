import { KeyboardEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { loginUser } from '@/api';
import { useNavigate } from 'react-router-dom';
import { logout, parseJwt } from '@/utils/auth';

const Login = () => {
	const navigate = useNavigate();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isRequestError, setIsRequestError] = useState(false);
	const [header, setHeader] = useState('SECRET SITE');

	const loginHandler = () => {
		loginUser(login, password)
			.then(({ data }) => {
				if (data) {
					const role = parseJwt(data.token).role.split('_')[1].toLowerCase();
					localStorage.setItem('token', data.token);
					localStorage.setItem('role', role);
					navigate(`/${role}`);
				}
			})
			.catch(() => {
				setIsRequestError(true);
				setHeader('LOGIN ERROR');
				logout(false);
			});
	};
	const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			// @ts-ignore
			e.target.blur();
			loginHandler();
		}
	};

	useEffect(() => {
		if (!isRequestError) setHeader('SECRET SITE');
	}, [isRequestError]);

	useEffect(() => {
		const role = localStorage.getItem('role');
		if (role) {
			navigate(`/${role}`);
		}
	}, []);

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
