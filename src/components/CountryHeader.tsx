import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CountryFormProps {
	setSeeForm?: React.Dispatch<React.SetStateAction<boolean>>;
	convertToCSV?: () => void;
	countryName?: string;
}

const CountryHeader: React.FC<CountryFormProps> = ({
	setSeeForm,
	convertToCSV,
	countryName,
}) => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				margin: '20px',
			}}
		>
			{countryName ? <h2>{countryName}</h2> : <h2>Gestion des pays</h2>}
			{countryName && (
				<button onClick={() => navigate('/')}>Gestion des pays</button>
			)}
			{setSeeForm && convertToCSV && (
				<div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
					<div style={{ display: 'flex', gap: '10px' }}>
						<button onClick={convertToCSV}>Exporter en csv</button>
						<button>Rechercher</button>
					</div>
					<button
						onClick={() => {
							setSeeForm(true);
						}}
					>
						Ajouter un pays
					</button>
				</div>
			)}
		</div>
	);
};

export default CountryHeader;
