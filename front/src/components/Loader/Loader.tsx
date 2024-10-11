import cls from './Loader.module.css';

export const Loader = () => {
	return (
		<div className="w-full h-4/5 flex flex-col items-center justify-center">
			<div className={cls.loader}></div>
		</div>
	);
};
