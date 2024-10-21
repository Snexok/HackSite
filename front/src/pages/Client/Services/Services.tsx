import { ServicesList } from '@/components/Client/Services/ServicesList';

export interface Service {
	id: number;
	title: string;
	description: string;
	price: number;
}

const Services = () => {
	return (
		<div className="flex flex-col">
			<ServicesList />
		</div>
	);
};

export default Services;
