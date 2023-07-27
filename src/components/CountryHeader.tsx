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
		<div className="headerCountry">
			{countryName ? <h2>{countryName}</h2> : <h2>Gestion des pays</h2>}
			{countryName && (
				<button onClick={() => navigate('/')}>Gestion des pays</button>
			)}
			{setSeeForm && convertToCSV && (
				<div className="buttonContainer">
					<div className="buttonDiv">
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
