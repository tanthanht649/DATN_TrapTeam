import {Location} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface LocationState {
  loadingLocation: boolean;
  dataLocations: Location[];
  locationById: Location;
}

export const dataLocations: Location[] = [];
export const locationById: Location = {} as Location;

const initialState: LocationState = {
  loadingLocation: false,
  dataLocations: dataLocations,
  locationById: locationById,
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

export const getLocationsById = createAsyncThunk(
  'location/getLocationsById',
  async (location_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/location/getLocationById?location_id=${location_id}`;

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
      return res.location;
    } else {
      return [];
    }
  },
);

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    logoutLocation: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
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
    builder.addCase(getLocationsById.pending, state => {
      state.loadingLocation = true;
    });
    builder.addCase(getLocationsById.fulfilled, (state, action) => {
      state.loadingLocation = false;
      state.locationById = action.payload;
    });
    builder.addCase(getLocationsById.rejected, state => {
      state.loadingLocation = false;
    });
  },
});

export const {logoutLocation} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
