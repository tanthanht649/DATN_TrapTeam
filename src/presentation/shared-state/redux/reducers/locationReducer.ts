import {Location} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface LocationState {
  loadingLocation: boolean;
  dataLocations: Location[];
}

export const dataLocations: Location[] = [];

const initialState: LocationState = {
  loadingLocation: false,
  dataLocations: dataLocations,
};


// lấy danh sách địa điểm phổ biến
export const getAllLocation = createAsyncThunk(
  'location/getAllLocation',
  async () => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/location/getAllLocations`;

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
      return res.locations;
    } else {
      return [];
    }
  },
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllLocation.pending, state => {
      state.loadingLocation = true;
    });
    builder.addCase(getAllLocation.fulfilled, (state, action) => {
      state.loadingLocation = false;
      state.dataLocations = action.payload;
    });
    builder.addCase(getAllLocation.rejected, state => {
      state.loadingLocation = false;
    });
  },
});

export const locationReducer = locationSlice.reducer;
