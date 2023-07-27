import { useRoutes } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

const AppRoutes = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Countries />,
		},
		{
			path: '/country/:id',
			element: <CountryDetails />,
		},
	]);
	return routes;
};

export default AppRoutes;
