import { FC, useEffect, useRef, useState } from 'react';
import { getAllServices } from '@/api';
import { ServiceCell } from '@/components/Admin/Services/ServiceCell';
import Service from '@/types/Services';

interface Props {
	reloadUserList?: number;
}

const SERVICES_BATCH_SIZE = 20;

export const ServicesList: FC<Props> = ({ reloadUserList }) => {
	const [services, setServices] = useState<Service[]>([]);

	const containerRef = useRef<HTMLDivElement | null>(null);
	const page = useRef<number>(0);

	const loadServices = () => {
		getAllServices(page.current, SERVICES_BATCH_SIZE).then(({ data }) => {
			setServices((serv) => [...serv, ...data]);
		});
	};

	const loadMoreServices = () => {
		page.current += 1;
		loadServices();
	};

	useEffect(() => {
		loadServices();
	}, [reloadUserList]);

	return (
		<div className="flex flex-col p-4 gap-4" ref={containerRef}>
			{services.map((service, idx) => (
				<ServiceCell service={service} idx={idx} key={service.id} />
			))}
			{!(services.length < SERVICES_BATCH_SIZE * (page.current + 1)) && (
				<span
					className="text-accent cursor-pointer hover:text-text"
					onClick={loadMoreServices}
				>
					load more...
				</span>
			)}
		</div>
	);
};
