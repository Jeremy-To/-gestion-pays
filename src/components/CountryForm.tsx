import React, { useState } from 'react';
import { Country } from '../interface/country';

interface CountryFormProps {
	onAddCountry?: (country: Country) => void;
	modifyCountry?: (index: number, updatedCountry: Country) => void;
	modifiedIndex?: number;
	setSeeModifyForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountryForm: React.FC<CountryFormProps> = ({
	onAddCountry,
	modifyCountry,
	modifiedIndex,
	setSeeModifyForm,
}) => {
	const [formData, setFormData] = useState<Country>({
		name: '',
		population: 0,
		superficie: 0,
		continent: '',
		produit_intérieur_brut: 0,
		image: '',
	});
	const isIndex = modifiedIndex === 0 || modifiedIndex;

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (onAddCountry) {
			onAddCountry(formData);
		} else if (modifyCountry && isIndex) {
			modifyCountry(modifiedIndex, formData);
		}
		setFormData({
			name: '',
			population: 0,
			superficie: 0,
			continent: '',
			produit_intérieur_brut: 0,
			image: '',
		});
		setSeeModifyForm(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Nom du pays:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="population">Population:</label>
				<input
					type="number"
					id="population"
					name="population"
					value={formData.population}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="superficie">Superficie :</label>
				<input
					type="text"
					id="superficie"
					name="superficie"
					value={formData.superficie}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="continent">continent :</label>
				<input
					type="text"
					id="continent"
					name="continent"
					value={formData.continent}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="produit_intérieur_brut">produit_intérieur_brut :</label>
				<input
					type="text"
					id="produit_intérieur_brut"
					name="produit_intérieur_brut"
					value={formData.produit_intérieur_brut}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="image">image :</label>
				<input
					type="text"
					id="image"
					name="image"
					value={formData.image}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">
				{onAddCountry ? 'Ajouter un pays' : 'Modifier le pays'}
			</button>
		</form>
	);
};

export default CountryForm;
