import {Province} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface ProvinceState {
  loadingProvince: boolean;
  dataProvince: Province[];
}

export const dataProvince: Province[] = [];

const initialState: ProvinceState = {
  loadingProvince: false,
  dataProvince: dataProvince,
};

// lấy danh sách tỉnh
export const getAllProvinces = createAsyncThunk(
  'province/getAllProvinces',
  async () => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/province/getAllProvinces`;

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
      return res.provinces;
    } else {
      return [];
    }
  },
);

const provinceSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {
    logoutProvince: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllProvinces.pending, state => {
      state.loadingProvince = true;
    });
    builder.addCase(getAllProvinces.fulfilled, (state, action) => {
      state.loadingProvince = false;
      state.dataProvince = action.payload;
    });
    builder.addCase(getAllProvinces.rejected, state => {
      state.loadingProvince = false;
    });
  },
});

export const {logoutProvince} = provinceSlice.actions;
export const provinceReducer = provinceSlice.reducer;
