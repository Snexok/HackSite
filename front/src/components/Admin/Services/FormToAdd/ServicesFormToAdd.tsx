import { FC, useEffect, useRef, useState } from 'react';
import { createService } from '@/api';
import Service from '@/types/Services';

interface Props {
	onSubmit: () => void;
}

export const ServicesFormToAdd: FC<Props> = ({ onSubmit }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

	const textareaRef = useRef<HTMLTextAreaElement | null>(null);

	const descriptionInputHandler = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = 'auto';
			textarea.style.height =
				Math.min(
					textarea.scrollHeight,
					5 * parseFloat(getComputedStyle(textarea).lineHeight),
				) + 'px';
			setDescription(textareaRef.current?.value || '');
		}
	};

	const submitHandler = () => {
		const newService = new Service(null, title, description, price);
		createService(newService).then(() => {
			onSubmit();
		});
	};

	return (
		<div className="flex flex-col w-full px-6 py-4 gap-2">
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
					<textarea
						ref={textareaRef}
						rows={1}
						className="text-secondary-green border-b border-primary-green bg-transparent w-full overflow-hidden resize-none outline-0 "
						onInput={descriptionInputHandler}
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
