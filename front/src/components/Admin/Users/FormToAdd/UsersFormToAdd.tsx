import { FC, useState } from 'react';
import { createUser } from '@/api';

interface Props {
	onSubmit: () => void;
}

export const UsersFormToAdd: FC<Props> = ({ onSubmit }) => {
	const [login, setLogin] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const submitHandler = () => {
		createUser(login, username, password).then(() => {
			onSubmit();
		});
	};

	return (
		<div className="flex flex-col w-fit px-6 py-4 gap-2">
			<div className="flex gap-2">
				<div className="flex flex-col gap-2">
					<span className="text-primary-green border-b border-transparent">Login:</span>
					<span className="text-primary-green border-b border-transparent">
						Username:
					</span>
					<span className="text-primary-green border-b border-transparent">
						Password:
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setLogin(target.value)}
					/>
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setUsername(target.value)}
					/>
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setPassword(target.value)}
					/>
				</div>
			</div>
			<div
				onClick={submitHandler}
				className="text-xl text-accent hover:text-text cursor-pointer"
			>
				Создать
			</div>
		</div>
	);
};
