import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ClientHeader } from '@/components/Client/Header';

export const ClientLayout = () => {
	const userRole = localStorage.getItem('role') || '';

	const isHaveAccess = ['admin', 'client'].includes(userRole);

	const navigate = useNavigate();

	useEffect(() => {
		if (!isHaveAccess) {
			navigate('/login');
		}
	}, []);

	if (!isHaveAccess) {
		return null;
	} else
		return (
			<div className="flex flex-col">
				<ClientHeader />
				<div className="p-4">
					<Outlet />
				</div>
			</div>
		);
};
