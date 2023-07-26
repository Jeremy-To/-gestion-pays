import React, { useState } from 'react';
import CountryForm from './CountryForm';
import CountryTable from './CountryTable';
import { Country } from '../interface/country';

const App: React.FC = () => {
	const [countries, setCountries] = useState<Country[]>([]);
	const [seeForm, setSeeForm] = useState<boolean>(false);

	const handleAddCountry = (country: Country) => {
		setCountries((prevCountries) => [...prevCountries, country]);
	};

	return (
		<div>
			{seeForm ? (
				<CountryForm onAddCountry={handleAddCountry} />
			) : (
				<button
					onClick={() => {
						setSeeForm(true);
					}}
				>
					setSeeForm
				</button>
			)}

			<CountryTable countries={countries} />
		</div>
	);
};

export default App;
