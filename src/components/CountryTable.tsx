import React, { useState } from 'react';
import { Country } from '../interface/country';
import CountryForm from './CountryForm';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCountry } from '../state/countriesSlice';

interface CountryTableProps {
	modifyCountry: (index: number, updatedCountry: Country) => void;
}

const CountryTable: React.FC<CountryTableProps> = ({ modifyCountry }) => {
	const navigate = useNavigate();
	const countries = useSelector(selectCountry);

	const [seeModifyForm, setSeeModifyForm] = useState<boolean>(false);
	const [modifiedIndex, setModifyIndex] = useState<number>();

	const handleClick = (
		e: React.MouseEvent<HTMLButtonElement>,
		index: number
	) => {
		e.stopPropagation();
		setSeeModifyForm(true);
		setModifyIndex(index);
	};

	const handleSeeMoreClick = (countryId: number) => {
		navigate(`/country/${countryId}`);
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
						<th>image</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{countries.map((country: Country, index: number) => (
						<tr key={index} onClick={() => handleSeeMoreClick(index)}>
							<td>{country.name}</td>
							<td>{country.population}</td>
							<td>{country.superficie}</td>
							<td>{country.continent}</td>
							<td>{country.produit_intérieur_brut}</td>
							<td>
								<img src={country.image} alt={country.name} />
							</td>
							<td>
								<button onClick={(e) => handleClick(e, index)}>éditer</button>
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
