import React, { /* useEffect, */ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryForm from './CountryForm';
import CountryTable from './CountryTable';
import { Country } from '../interface/country';

import {
	addCountry,
	selectCountry,
	updateCountry,
} from '../state/countriesSlice';
import CountryHeader from './CountryHeader';

const Countries: React.FC = () => {
	const countries = useSelector(selectCountry);
	const dispatch = useDispatch();
	const [seeForm, setSeeForm] = useState<boolean>(false);

	/* 	useEffect(() => {
		const storedCountries = localStorage.getItem('countries');
		if (storedCountries) {
			dispatch(addCountry(JSON.parse(storedCountries)));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('countries', JSON.stringify(countries));
	}, [countries]); */

	const handleAddCountry = (country: Country) => {
		dispatch(addCountry(country));
	};

	const modifyCountry = (index: number, updatedCountry: Country) => {
		dispatch(updateCountry({ index, updatedCountry }));
	};
	const convertToCSV = () => {
		let csvContent = 'data:text/csv;charset=utf-8,';
		csvContent +=
			'name,population,superficie,continent,produit_intérieur_brut\n';

		countries.forEach((country: Country) => {
			const {
				name,
				population,
				superficie,
				continent,
				produit_intérieur_brut,
			} = country;
			csvContent += `${name},${superficie},${population},${continent},${produit_intérieur_brut}\n`;
		});

		const encodedURI = encodeURI(csvContent);
		const link = document.createElement('a');
		link.setAttribute('href', encodedURI);
		link.setAttribute('download', 'countries.csv');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="box">
			{seeForm ? (
				<div className="modal-overlay">
					<div className="modal-content">
						<CountryForm
							onAddCountry={handleAddCountry}
							setSeeModifyForm={setSeeForm}
						/>
					</div>
				</div>
			) : (
				<div>
					<CountryHeader convertToCSV={convertToCSV} setSeeForm={setSeeForm} />
					<CountryTable modifyCountry={modifyCountry} />
				</div>
			)}
		</div>
	);
};

export default Countries;
