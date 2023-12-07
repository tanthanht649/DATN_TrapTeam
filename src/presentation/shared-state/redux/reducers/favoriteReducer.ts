import {Favorite, Tour} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface FavoriteState {
  loadingFavorite: boolean;
  dataFavorites: Favorite[];
  dataFavoriteNoId: Tour[];
}

export const dataFavorites: Favorite[] = [];
export const dataFavoriteNoId: Tour[] = [];

const initialState: FavoriteState = {
  loadingFavorite: false,
  dataFavorites: dataFavorites,
  dataFavoriteNoId: dataFavoriteNoId,
};

export const getDataFavorite = createAsyncThunk(
  'favorite/getDataFavorite',
  async (user_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/favorite/getAllFavoritesByUserId?user_id=${user_id}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      return res;
    };
    const res = await fetchData();

    if (res.result) {
      return res.favorites;
    }
  },
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDataFavorite.pending, state => {
        state.loadingFavorite = true;
      })
      .addCase(getDataFavorite.fulfilled, (state, action) => {
        state.loadingFavorite = false;
        state.dataFavorites = action.payload;
        const data: Favorite[] = action.payload;
        state.dataFavoriteNoId = data.map(item => item.tour_id);
      })
      .addCase(getDataFavorite.rejected, state => {
        state.loadingFavorite = false;
      });
  },
});

export const favoriteReducer = favoriteSlice.reducer;
