import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { Country } from '../interface/country';

interface CountriesState {
	countries: Country[];
}

const initialState: CountriesState = {
	countries: [],
};

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		addCountry: (state, action: PayloadAction<Country>) => {
			state.countries.push(action.payload);
		},
		updateCountry: (
			state,
			action: PayloadAction<{ index: number; updatedCountry: Country }>
		) => {
			const { index, updatedCountry } = action.payload;
			state.countries[index] = updatedCountry;
		},
	},
});

export const { addCountry, updateCountry } = countriesSlice.actions;

export const selectCountry = (state: RootState) =>
	state.countriesReducer.countries;

export default countriesSlice.reducer;
