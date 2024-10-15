import { FC, useEffect, useState } from 'react';
import { getAllUser } from '@/api';
import { User } from '@/pages/Admin/Users/Users';
import { UserCell } from '@/components/Admin/Users/UserCell/UserCell';

interface Props {
	reloadUserList?: number;
}

export const UsersList: FC<Props> = ({ reloadUserList }) => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		getAllUser().then(({ data }) => {
			setUsers(data);
		});
	}, [reloadUserList]);

	return (
		<div className="flex flex-col p-4 gap-4">
			{users.map((user, idx) => (
				<UserCell user={user} idx={idx} key={user.id} />
			))}
		</div>
	);
};
