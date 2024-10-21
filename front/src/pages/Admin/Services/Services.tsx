import { useState } from 'react';
import { ServicesFormToAdd } from '@/components/Admin/Services';
import { ServicesList } from '@/components/Admin/Services/ServicesList';

const Services = () => {
	const [isAddingService, setIsAddingService] = useState(false);
	const [reloadServiceList, setReloadServiceList] = useState(0);

	return (
		<div className="flex flex-col max-w-xl">
			<div
				className="cursor-pointer hover:text-accent select-none"
				onClick={() => setIsAddingService((v) => !v)}
			>
				{!isAddingService ? '+' : '-'} Добавить услугу
			</div>
			{isAddingService && (
				<ServicesFormToAdd
					onSubmit={() => {
						setIsAddingService(false);
						setReloadServiceList((v) => v + 1);
					}}
				/>
			)}
			<ServicesList reloadUserList={reloadServiceList} />
		</div>
	);
};

export default Services;
