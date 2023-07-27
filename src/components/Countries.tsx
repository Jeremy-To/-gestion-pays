import React, { useEffect, useState } from 'react';
import CountryForm from './CountryForm';
import CountryTable from './CountryTable';
import { Country } from '../interface/country';

const Countries: React.FC = () => {
	const [countries, setCountries] = useState<Country[]>([]);
	const [seeForm, setSeeForm] = useState<boolean>(false);

	useEffect(() => {
		const storedCountries = localStorage.getItem('countries');
		if (storedCountries) {
			setCountries(JSON.parse(storedCountries));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('countries', JSON.stringify(countries));
	}, [countries]);

	const handleAddCountry = (country: Country) => {
		setCountries((prevCountries) => [...prevCountries, country]);
	};
	const modifyCountry = (index: number, updatedCountry: Country) => {
		setCountries((prevCountries) => {
			const updatedCountries = [...prevCountries];
			updatedCountries[index] = updatedCountry;
			return updatedCountries;
		});
	};
	const convertToCSV = () => {
		let csvContent = 'data:text/csv;charset=utf-8,';
		csvContent +=
			'name,population,superficie,continent,produit_intérieur_brut\n';

		countries.forEach((country) => {
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
		<div>
			{seeForm ? (
				<CountryForm
					onAddCountry={handleAddCountry}
					setSeeModifyForm={setSeeForm}
				/>
			) : (
				<div>
					<button
						onClick={() => {
							setSeeForm(true);
						}}
					>
						Ajouter un pays
					</button>
					<button onClick={convertToCSV}>Export to csv</button>
					<CountryTable countries={countries} modifyCountry={modifyCountry} />
				</div>
			)}
		</div>
	);
};

export default Countries;
