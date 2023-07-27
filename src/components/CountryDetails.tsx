import React from 'react';
/* import { useParams } from 'react-router-dom'; */

const CountryDetails: React.FC = () => {
	/* 	const { countryId } = useParams();
	const countryIndex = parseInt(, 10);

	// Check if the countryIndex is valid
	if (
		isNaN(countryIndex) ||
		countryIndex < 0 ||
		countryIndex >= countries.length
	) {
		return <div>Invalid country ID.</div>;
	}

	const country = countries[countryIndex];
 */
	return (
		<div>
			<h2>Country Details</h2>
			{/* 			<p>Name: {country.name}</p>
			<p>Population: {country.population}</p>
			<p>Superficie: {country.superficie}</p>
			<p>Continent: {country.continent}</p>
			<p>Produit Intérieur Brut: {country.produit_intérieur_brut}</p> */}
		</div>
	);
};

export default CountryDetails;
