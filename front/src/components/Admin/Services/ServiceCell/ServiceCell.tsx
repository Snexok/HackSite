import {
	ChangeEvent,
	FC,
	KeyboardEvent,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import classNames from 'classnames';
import Service from '@/types/Services';
import { updateService } from '@/api';

interface Props {
	service: Service;
	idx: number;
}

export const ServiceCell: FC<Props> = ({ service, idx }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [title, setTitle] = useState(service.title);
	const [description, setDescription] = useState(service.description);
	const [price, setPrice] = useState(service.price);

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

	useEffect(() => {
		descriptionInputHandler();
	}, [isEditing]);

	const updateServiceSubmit = () => {
		updateService({ ...service, title, description, price });
	};

	const enterHandler = (
		e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>,
	) => {
		if (e.key === 'Enter') {
			updateServiceSubmit();
		}
	};

	return (
		<div className="flex flex-col">
			<div className="flex gap-2">
				<span className="cursor-default">{idx + 1}.</span>
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
					<div className="flex gap-1">
						<span className="text-primary-green cursor-default">title: </span>
						<input
							className="w-full text-secondary-green bg-transparent outline-0"
							maxLength={32}
							value={title}
							onChange={({ target }) => setTitle(target.value)}
							onKeyDown={enterHandler}
						/>
					</div>
					<div className="flex gap-1">
						<span className="text-primary-green cursor-default">description: </span>
						<textarea
							ref={textareaRef}
							value={description}
							rows={1}
							maxLength={200}
							className="text-secondary-green bg-transparent w-full overflow-hidden resize-none outline-0 "
							onInput={descriptionInputHandler}
						>
							{service.description}
						</textarea>
					</div>
					<div className="flex gap-1">
						<span className="text-primary-green cursor-default">price: </span>
						<input
							className="w-full text-secondary-green bg-transparent outline-0"
							maxLength={16}
							value={price}
							onChange={({ target }) => setPrice(+target.value)}
							onKeyDown={enterHandler}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
