import { Outlet, useNavigate } from 'react-router-dom';
import { AdminHeader } from '@/components/Admin/Header';
import { useEffect } from 'react';

export const AdminLayout = () => {
	const userRole = localStorage.getItem('role');

	const navigate = useNavigate();

	useEffect(() => {
		if (userRole !== 'admin') {
			navigate('/login');
		}
	}, []);

	if (userRole !== 'admin') {
		return null;
	} else
		return (
			<div className="flex flex-col">
				<AdminHeader />
				<div className="p-4">
					<Outlet />
				</div>
			</div>
		);
};
