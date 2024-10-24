import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { useCallback } from 'react';
import { logout } from '@/utils/auth';

export const AdminHeader = () => {
	const location = useLocation();
	const isServicesPage = /services/i.test(location.pathname);
	const isUsersPage = /users/i.test(location.pathname);

	const logoutHandler = useCallback(() => {
		logout();
	}, []);

	return (
		<div className="flex px-4 h-12 items-center justify-between border-b border-primary-green">
			<div className="flex gap-3 items-center">
				<Link
					to="/admin/services"
					className={classNames('text-primary-green hover:text-accent', {
						'text-white': isServicesPage,
					})}
				>
					services
				</Link>
				<Link
					to="/admin/users"
					className={classNames('text-primary-green hover:text-accent', {
						'text-white': isUsersPage,
					})}
				>
					users
				</Link>
			</div>
			<span
				className="text-primary-green hover:text-accent cursor-pointer"
				onClick={logoutHandler}
			>
				logout
			</span>
		</div>
	);
};
