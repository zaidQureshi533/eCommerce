import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
	name: 'user',
	initialState: {
		value: {
			isLogin: true,
		},
		reducers: {
			updateUser: (state, action) => {
				state.value = action.payload;
			},
		},
	},
});

export const {updateUser} = UserSlice.actions;
export default UserSlice.reducer;
