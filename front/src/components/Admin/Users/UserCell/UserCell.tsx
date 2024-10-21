import { FC, useState } from 'react';
import { User } from '@/pages/Admin/Users/Users';
import classNames from 'classnames';

interface Props {
	user: User;
	idx: number;
}

export const UserCell: FC<Props> = ({ user, idx }) => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className="flex flex-col">
			<div className="flex gap-2">
				<span>{idx + 1}.</span>
				<span
					className={classNames(
						{
							'text-text': isEditing,
						},
						{
							'text-primary-green': !isEditing,
						},
						'hover:text-accent select-none cursor-pointer',
					)}
					onClick={() => setIsEditing((v) => !v)}
				>
					{user.username}
				</span>
			</div>
			{isEditing && (
				<div className="flex flex-col px-5">
					<div>
						<span className="text-primary-green">username: </span>
						<span className="text-secondary-green">{user.username}</span>
					</div>
					<div>
						<span className="text-primary-green">login: </span>
						<span className="text-secondary-green">{user.login}</span>
					</div>
					<div>
						<span className="text-primary-green">role: </span>
						<span className="text-secondary-green">{user.role.toLowerCase()}</span>
					</div>
				</div>
			)}
		</div>
	);
};
