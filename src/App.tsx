import React from 'react';
import ReactDOM from 'react-dom/client';
import Countries from './components/Countries.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Countries />
	</React.StrictMode>
);
