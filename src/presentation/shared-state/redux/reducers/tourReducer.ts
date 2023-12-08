import {Tour, TourAndLocation} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface TourState {
  loadingTour: boolean;
  dataToursOutstanding: Tour[];
  dataToursByProvince: Tour[];
  tourDetail: TourAndLocation;
  loadingTourDetail: boolean;
}

export const dataToursOutstanding: Tour[] = [];
export const dataToursByProvince: Tour[] = [];
export const dataTourDetail = {} as TourAndLocation;

const initialState: TourState = {
  loadingTour: false,
  dataToursOutstanding: dataToursOutstanding,
  dataToursByProvince: dataToursByProvince,
  tourDetail: dataTourDetail,
  loadingTourDetail: false,
};

// lấy danh sách tour nổi bật
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

// lấy danh sách tour của tỉnh thành diễn ra sự kiện
export const getTourByProvince = createAsyncThunk(
  'tour/getTourByProvince',
  async (province_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByProvinceId?province_id=${province_id}`;

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

//lấy chi tiết tour theo id
export const getTourById = createAsyncThunk(
  'tour/getTourById',
  async (tour_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByIdAndLocations?tour_id=${tour_id}`;

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
      return res.tour;
    } else {
      return [];
    }
  },
);

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    logoutTour: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
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
    builder.addCase(getTourByProvince.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(getTourByProvince.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataToursByProvince = action.payload;
    });
    builder.addCase(getTourByProvince.rejected, state => {
      state.loadingTour = false;
    });
    builder.addCase(getTourById.pending, state => {
      state.loadingTourDetail = true;
    });
    builder.addCase(getTourById.fulfilled, (state, action) => {
      state.loadingTourDetail = false;
      state.tourDetail = action.payload;
    });
    builder.addCase(getTourById.rejected, state => {
      state.loadingTourDetail = false;
    });
  },
});

export const {logoutTour} = tourSlice.actions;
export const tourReducer = tourSlice.reducer;
