import { FC, useEffect, useState } from 'react';
import { getAllServices } from '@/api';
import { ServiceCell } from '@/components/Client/Services/ServiceCell';
import Service from '@/types/Services';

interface Props {
	reloadUserList?: number;
}

export const ServicesList: FC<Props> = ({ reloadUserList }) => {
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		getAllServices().then(({ data }) => {
			console.log(data);
			setServices(data);
		});
	}, [reloadUserList]);

	return (
		<div className="flex flex-col p-4 gap-4">
			<h1 className="text-3xl">Список услуг</h1>
			{services.map((service) => (
				<ServiceCell service={service} key={service.id} />
			))}
		</div>
	);
};
