import {configureStore} from '@reduxjs/toolkit';
import userReducer from './states/user';
export const store = configureStore({
	reducer: {
		user: userReducer,
	},
});
