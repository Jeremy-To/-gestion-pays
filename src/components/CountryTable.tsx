import React from 'react';
import { Country } from '../interface/country';

interface CountryTableProps {
	countries: Country[];
}

const CountryTable: React.FC<CountryTableProps> = ({ countries }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Nom du pays</th>
					<th>Population</th>
					<th>Superficie</th>
					<th>Continent</th>
					<th>Produit_intérieur_brut</th>
				</tr>
			</thead>
			<tbody>
				{countries.map((country, index) => (
					<tr key={index}>
						<td>{country.name}</td>
						<td>{country.population}</td>
						<td>{country.superficie}</td>
						<td>{country.continent}</td>
						<td>{country.produit_intérieur_brut}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CountryTable;
