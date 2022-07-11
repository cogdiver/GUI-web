import { useState, useEffect } from "react";


const useInitialState = () => {
	const API = process.env.API_URL
	const [theme, setTheme] = useState('dark');
	const [login, setLogin] = useState(true);
	const user_id = '1'
	const user_name = 'user1'
	const user_email = 'user1@gmail.com'

	// data variables
	const [userProcesses, setUserProcesses] = useState(null);
	const [products, setProducts] = useState(null);

	useEffect(() => {
        async function fetchData(url, func) {
			const requestOptions = {
				method: 'GET',
				redirect: 'follow'
			};
			
			const response =
				await fetch(url, requestOptions)
					.then(response => response.text())
					.then(result => func(result))
					.catch(error => console.log('error', error));
		}
        fetchData(
			`${API}/users/${user_id}/processes/`,
			setUserProcesses
		)
        fetchData(
			`${API}/products/`,
			setProducts
		)
    }, []);

	return {
		theme,
		setTheme,
		login,
		setLogin,
		user_id,
		user_name,
		user_email,
		// data variables
		userProcesses,
		products
	}
}

export { useInitialState };
