import { FC, useState } from 'react';
import classNames from 'classnames';
import { Service } from '@/pages/Admin/Services/Services';

interface Props {
	service: Service;
	idx: number;
}

export const ServiceCell: FC<Props> = ({ service, idx }) => {
	const [isEditing, setIsEditing] = useState(false);
	return (
		<div className="flex flex-col">
			<div className="flex gap-2">
				<span>{idx + 1}.</span>
				<span
					className={classNames(
						{
							'text-text': isEditing,
						},
						{
							'text-primary-green': !isEditing,
						},
						'hover:text-accent select-none cursor-pointer',
					)}
					onClick={() => setIsEditing((v) => !v)}
				>
					{service.title}
				</span>
			</div>
			{isEditing && (
				<div className="flex flex-col px-5">
					<div>
						<span className="text-primary-green">title: </span>
						<span className="text-secondary-green">{service.title}</span>
					</div>
					<div>
						<span className="text-primary-green">description: </span>
						<span className="text-secondary-green">{service.description}</span>
					</div>
					<div>
						<span className="text-primary-green">price: </span>
						<span className="text-secondary-green">{service.price}</span>
					</div>
				</div>
			)}
		</div>
	);
};
