import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCountry } from '../state/countriesSlice';
import CountryHeader from './CountryHeader';

const CountryDetails: React.FC = () => {
	const { id } = useParams();
	const countries = useSelector(selectCountry);

	const country = countries[id as unknown as number];
	return (
		<>
			<CountryHeader countryName={country.name} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '20px',
				}}
			>
				<div>
					<p>Name: {country.name}</p>
					<p>Population: {country.population}</p>
					<p>Superficie: {country.superficie}</p>
					<p>Continent: {country.continent}</p>
					<p>Produit Intérieur Brut: {country.produit_intérieur_brut}</p>
				</div>
				<img src={country.image} alt={country.name} />
			</div>
		</>
	);
};

export default CountryDetails;
