import { FC, useState } from 'react';
import { createService } from '@/api';

interface Props {
	onSubmit: () => void;
}

export const ServicesFormToAdd: FC<Props> = ({ onSubmit }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	const submitHandler = () => {
		createService(title, description, price).then(() => {
			onSubmit();
		});
	};

	return (
		<div className="flex flex-col w-fit px-6 py-4 gap-2">
			<div className="flex flex-col gap-2">
				<div className="flex gap-2">
					<span className="text-primary-green border-b border-transparent">Title:</span>
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setTitle(target.value)}
					/>
				</div>
				<div className="flex gap-2">
					<span className="text-primary-green border-b border-transparent">Desc:</span>
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setDescription(target.value)}
					/>
				</div>
				<div className="flex gap-2">
					<span className="text-primary-green border-b border-transparent">Price:</span>
					<input
						className="px-1 border-b border-primary-green bg-transparent outline-0 caret-primary-green text-secondary-green"
						onChange={({ target }) => setPrice(+target.value)}
					/>
				</div>
			</div>
			<div
				onClick={submitHandler}
				className="text-xl text-accent hover:text-text cursor-pointer"
			>
				Создать
			</div>
		</div>
	);
};
