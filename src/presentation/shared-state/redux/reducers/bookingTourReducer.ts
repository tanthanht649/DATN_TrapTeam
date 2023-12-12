import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface BookingTourState {
  loadingBookingTour: boolean;
  quantity: number;
}

const initialState: BookingTourState = {
  loadingBookingTour: false,
  quantity: 0,
};

// lấy số lượng khách đã có tour đã đặt theo tour_id
export const getQuantityBookingTour = createAsyncThunk(
  'bookingTour/getQuantityBookingTour',
  async (tour_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/bookingtour/getAllBookingToursByTourId?tour_id=${tour_id}`;

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
      return res.quantity;
    }
  },
);

interface DataBookingTour {
  user_id: string | undefined;
  tour_id: string | undefined;
  discount: number | undefined;
  adult_count: number | undefined;
  child_count: number | undefined;
  price: number | undefined;
  note: string | undefined;
  role: boolean | undefined;
  location_custom:
    | [
        {
          _id: string;
          name: string;
        },
      ]
    | undefined;
}

export const addBookingTour = createAsyncThunk(
  'bookingTour/addBookingTour',
  async (data: DataBookingTour) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/bookingtour/addNewBookingTour`;

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
      console.log(res);
      return res.result;
    }
  },
);

const bookingTourSlice = createSlice({
  name: 'bookingTour',
  initialState,
  reducers: {
    logoutBookingTour: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getQuantityBookingTour.pending, state => {
      state.loadingBookingTour = true;
    });
    builder.addCase(getQuantityBookingTour.fulfilled, (state, action) => {
      state.loadingBookingTour = false;
      state.quantity = action.payload;
    });
    builder.addCase(getQuantityBookingTour.rejected, state => {
      state.loadingBookingTour = false;
    });
    builder.addCase(addBookingTour.pending, state => {
      state.loadingBookingTour = true;
    });
    builder.addCase(addBookingTour.fulfilled, (state, action) => {
      state.loadingBookingTour = false;
    });
    builder.addCase(addBookingTour.rejected, state => {
      state.loadingBookingTour = false;
    });
  },
});

export const {logoutBookingTour} = bookingTourSlice.actions;
export const bookingTourReducer = bookingTourSlice.reducer;
