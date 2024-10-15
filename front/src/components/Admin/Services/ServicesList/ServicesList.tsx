import { FC, useEffect, useState } from 'react';
import { getAllServices } from '@/api';
import { ServiceCell } from '@/components/Admin/Services/ServiceCell';
import { Service } from '@/pages/Admin/Services/Services';

interface Props {
	reloadUserList?: number;
}

export const ServicesList: FC<Props> = ({ reloadUserList }) => {
	const [services, setServices] = useState<Service[]>([]);

	useEffect(() => {
		getAllServices().then(({ data }) => {
			setServices(data);
		});
	}, [reloadUserList]);

	return (
		<div className="flex flex-col p-4 gap-4">
			{services.map((service, idx) => (
				<ServiceCell service={service} idx={idx} key={service.id} />
			))}
		</div>
	);
};
