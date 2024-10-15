import { useState } from 'react';

const Admin = () => {
	const [actionsList, setActionsList] = useState([]);

	if (!actionsList.length)
		return (
			<div>
				Здесь вы сможете отслеживать все действия совершенные админом
				<p className="text-sm opacity-60">Пусть ни что не ускользнёт от вашего взора</p>
			</div>
		);
	return <div className="flex flex-col"></div>;
};

export default Admin;
