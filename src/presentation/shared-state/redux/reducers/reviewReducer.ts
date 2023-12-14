import {Review} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface ReviewState {
  loadingReview: boolean;
  dataReviews: Review[];
}

export const dataReview: Review[] = [];

const initialState: ReviewState = {
  loadingReview: false,
  dataReviews: dataReview,
};

// lấy danh sách review của tour

export const getAllReviews = createAsyncThunk(
  'review/getReview',
  async (tour_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/review/getReviewByTour?tour_id=${tour_id}`;

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
      return res.reviews;
    } else {
      return [];
    }
  },
);

interface DataAddReview {
  user_id: string | undefined;
  tour_id: string | undefined;
  content: string | undefined;
}

// thêm review tour mới của user
export const addReview = createAsyncThunk(
  'review/addReview',
  async (data: DataAddReview) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/review/addReview`;

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
      console.log('resAddreview', res);
      return res;
    } else {
      return [];
    }
  },
);

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    logoutReview: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllReviews.pending, state => {
      state.loadingReview = true;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.loadingReview = false;
      state.dataReviews = action.payload;
    });
    builder.addCase(getAllReviews.rejected, state => {
      state.loadingReview = false;
    });
    builder.addCase(addReview.pending, state => {
      state.loadingReview = true;
    });
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.loadingReview = false;
    });
    builder.addCase(addReview.rejected, state => {
      state.loadingReview = false;
    });
  },
});

export const {logoutReview} = reviewSlice.actions;
export const reviewReducer = reviewSlice.reducer;
