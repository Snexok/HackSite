import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/login');
	}, []);

	return <></>;
};

export default Main;
