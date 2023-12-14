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

// lấy danh sách tour yêu thích của user
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

interface DataAddFavorite {
  user_id: string | undefined;
  tour_id: string | undefined;
}

// thêm tour yêu thích mới của user

export const addFavorite = createAsyncThunk(
  'favorite/addFavorite',
  async (data: DataAddFavorite) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/favorite/addNewFavorite`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      return res;
    };
    const res = await fetchData();

    if (res.result) {
      return res.favorite;
    }
  },
);

// xóa tour yêu thích của user

interface DataDeleteFavorite {
  user_id: string | undefined;
  tour_id: string | undefined;
}

export const deleteFavorite = createAsyncThunk(
  'favorite/deleteFavorite',
  async (data: DataDeleteFavorite) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/favorite/deleteFavorite`;

      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      return res;
    };
    const res = await fetchData();

    if (res.result) {
      console.log(res.data);
      return res.data;
    }
  },
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    logoutFavorite: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
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
      })
      .addCase(addFavorite.pending, state => {
        state.loadingFavorite = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.loadingFavorite = false;
      })
      .addCase(addFavorite.rejected, state => {
        state.loadingFavorite = false;
      })
      .addCase(deleteFavorite.pending, state => {
        state.loadingFavorite = true;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.loadingFavorite = false;
      })
      .addCase(deleteFavorite.rejected, state => {
        state.loadingFavorite = false;
      });
  },
});

export const {logoutFavorite} = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
