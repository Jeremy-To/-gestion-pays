import React, { useState } from 'react';
import { Country } from '../interface/country';
import CountryForm from './CountryForm';
import { useNavigate } from 'react-router-dom';

interface CountryTableProps {
	countries: Country[];
	modifyCountry: (index: number, updatedCountry: Country) => void;
}

const CountryTable: React.FC<CountryTableProps> = ({
	countries,
	modifyCountry,
}) => {
	const navigate = useNavigate();
	const [seeModifyForm, setSeeModifyForm] = useState<boolean>(false);
	const [modifiedIndex, setModifyIndex] = useState<number | null>(null);

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement>,
		index: number
	) => {
		e.stopPropagation();
		setSeeModifyForm(true);
		setModifyIndex(index);
	};

	const handleSeeMoreClick = (/* index: number */) => {
		/* 		const clickedCountry = countries[index];
		 */ navigate('/country/');
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Nom du pays</th>
						<th>Population</th>
						<th>Superficie</th>
						<th>Continent</th>
						<th>Produit_intérieur_brut</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((country, index) => (
						<tr key={index} onClick={() => handleSeeMoreClick(/* index */)}>
							<td>{country.name}</td>
							<td>{country.population}</td>
							<td>{country.superficie}</td>
							<td>{country.continent}</td>
							<td>{country.produit_intérieur_brut}</td>
							<td>
								<button onClick={(e) => handleClick(e, index)}>here</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{seeModifyForm && (
				<div className="modal-overlay">
					<div className="modal-content">
						<CountryForm
							modifyCountry={modifyCountry}
							modifiedIndex={modifiedIndex}
							setSeeModifyForm={setSeeModifyForm}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryTable;
