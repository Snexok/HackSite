import { FC, useState } from 'react';
import classNames from 'classnames';
import Service from '@/types/Services';
import cls from './ServiceCell.module.css';

interface Props {
	service: Service;
}

export const ServiceCell: FC<Props> = ({ service }) => {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className={classNames(
				cls.ServiceCell,
				'flex flex-col max-w-md p-4 border border-primary-green rounded-2xl cursor-default',
			)}
			onMouseOver={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="flex flex-col gap-1.5">
				<span className="text-primary-green text-xl">{service.title}</span>

				<span className="text-sm whitespace-pre-wrap">{service.description}</span>

				<div className="flex gap-2 justify-end">
					<span
						className={classNames(
							{ 'text-shadow-primary-green text-primary-green': hovered },
							{ 'text-transparent': !hovered },
						)}
					>
						{service.price.toLocaleString('ru-RU')} ₽
					</span>
					<div
						className="px-2 py-1 border border-accent hover:text-primary-green
					rounded-lg text-accent text-xs cursor-pointer hover:text-shadow-primary-green
					active:scale-90 select-none"
					>
						Заказать
					</div>
				</div>
			</div>
		</div>
	);
};
