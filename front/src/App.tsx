import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/pages/Main';
import { Loader } from '@/components/Loader';
import { LoginPage } from '@/pages/Login';
import { ClientPage } from '@/pages/Client';
import { AdminPage } from '@/pages/Admin';
import { AdminLayout } from '@/layouts/Admin';
import { AdminServicesPage } from '@/pages/Admin/Services';
import { AdminUsersPage } from '@/pages/Admin/Users';
import { ClientLayout } from '@/layouts/Client';

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/client" element={<ClientLayout />}>
					<Route index element={<ClientPage />} />
				</Route>
				<Route path="/admin" element={<AdminLayout />}>
					<Route index element={<AdminPage />} />
					<Route path="services" element={<AdminServicesPage />} />
					<Route path="users" element={<AdminUsersPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
