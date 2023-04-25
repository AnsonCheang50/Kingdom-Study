import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentPage: 'landing',
	unloadGame: null,
};

const siteSlice = createSlice({
	name: 'site',
	initialState,
	reducers: {
		setCurrentPage: {
			reducer(state, action) {
				state.currentPage = action.payload;
			},
		},
		setUnloadGame: {
			reducer(state, action) {
				state.unloadGame = action.payload;
			}
		}
	},
});

export const selectCurrentPage = (state) => state.currentPage;
export const useUnloadGame = (state) => state.unloadGame;

export const { setCurrentPage, setUnloadGame } = siteSlice.actions;

export default siteSlice.reducer;
