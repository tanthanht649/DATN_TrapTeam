import {Tour} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface TourState {
  loadingTour: boolean;
  dataToursOutstanding: Tour[];
}

export const dataToursOutstanding: Tour[] = [];

const initialState: TourState = {
  loadingTour: false,
  dataToursOutstanding: dataToursOutstanding,
};

export const getToursOutstanding = createAsyncThunk(
  'tour/getToursOutstanding',
  async () => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourHighlight`;

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
      return res.tours;
    } else {
      return [];
    }
  },
);

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getToursOutstanding.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(getToursOutstanding.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataToursOutstanding = action.payload;
    });
    builder.addCase(getToursOutstanding.rejected, state => {
      state.loadingTour = false;
    });
  },
});

export const tourReducer = tourSlice.reducer;
