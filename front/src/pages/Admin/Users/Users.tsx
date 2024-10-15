import { useState } from 'react';
import { UsersFormToAdd } from '@/components/Admin/Users';
import { UsersList } from '@/components/Admin/Users/UsersList';

export interface User {
	id: number;
	username: string;
	login: string;
	password: string;
	role: string;
}

const Users = () => {
	const [isAddingService, setIsAddingService] = useState(false);
	const [reloadUserList, setReloadUserList] = useState(0);

	return (
		<div className="flex flex-col">
			<div
				className="cursor-pointer hover:text-accent select-none"
				onClick={() => setIsAddingService((v) => !v)}
			>
				{!isAddingService ? '+' : '-'} Добавить пользователя
			</div>
			{isAddingService && (
				<UsersFormToAdd
					onSubmit={() => {
						setIsAddingService(false);
						setReloadUserList((v) => v + 1);
					}}
				/>
			)}
			<UsersList reloadUserList={reloadUserList} />
		</div>
	);
};

export default Users;
