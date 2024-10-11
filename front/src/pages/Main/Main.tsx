import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

const Main = () => {
	const navigate = useNavigate()
	useEffect(() => {
		// axios
		// 	.get(
		// 		'http://localhost:8080/api/v1/user/get/'
		// 	)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 		dispatch(setUser(res.data));
		// 		navigate('/' + res.data.role);
		// 	});
		navigate("/login")
	}, []);

	return <></>;
};

export default Main;
