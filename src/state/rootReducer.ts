import { combineReducers } from '@reduxjs/toolkit';

import countriesSlice from './countriesSlice';

const rootReducer = combineReducers({
	countriesReducer: countriesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
