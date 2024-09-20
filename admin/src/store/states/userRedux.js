import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
	name: 'user',
	initialState: {isLogin: false, currentUser: null, isFetching: false, error: false},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.isLogin = true;
			state.currentUser = action.payload;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logout: (state)=> {
			state.isLogin = false;
			state.currentUser= null;
		}
	},
});

export const {loginStart, loginSuccess, loginFailure, logout} = UserSlice.actions;
export default UserSlice.reducer;
