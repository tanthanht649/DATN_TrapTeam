import {Tour, TourAndLocation} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface TourState {
  loadingTour: boolean;
  dataToursOutstanding: Tour[];
  dataToursByProvince: Tour[];
  tourDetail: TourAndLocation;
  loadingTourDetail: boolean;
  dataTourByLocation: Tour[];
  dataSearchName: Tour[];
  dataSearch: Tour[];
}

export const dataToursOutstanding: Tour[] = [];
export const dataToursByProvince: Tour[] = [];
export const dataTourDetail = {} as TourAndLocation;
export const dataTourByLocation: Tour[] = [];
export const dataSearchName: Tour[] = [];
export const dataSearch: Tour[] = [];

const initialState: TourState = {
  loadingTour: false,
  dataToursOutstanding: dataToursOutstanding,
  dataToursByProvince: dataToursByProvince,
  tourDetail: dataTourDetail,
  loadingTourDetail: false,
  dataTourByLocation: dataTourByLocation,
  dataSearchName: dataSearchName,
  dataSearch: dataSearch,
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

// lấy danh sách tour chứa địa điểm phổ biến
export const getTourByLocation = createAsyncThunk(
  'tour/getTourByLocation',
  async (location_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByLocation?location_id=${location_id}`;

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

export const findTourByNames = createAsyncThunk(
  'tour/findTourByNames',
  async (name: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByName?name=${name}`;

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

export const findTourByScreenSearch = createAsyncThunk(
  'tour/findTourByScreenSearch',
  async (name: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByName?name=${name}`;

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

interface DataFindFilter {
  locationProvinces: string;
  is_popular: boolean;
  minPrice: string;
  maxPrice: string;
  dayFind: string;
}

// tìm kiếm theo filter
export const findTourByFilter = createAsyncThunk(
  'tour/findTourByFilter',
  async (data: DataFindFilter) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/tour/getTourByFilter?locationProvinces=${data.locationProvinces}&is_popular=${data.is_popular}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}&dayFind=${data.dayFind}`;

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
      console.log(res.tours);
      return res.tours;
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
    builder.addCase(getTourByLocation.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(getTourByLocation.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataTourByLocation = action.payload;
    });
    builder.addCase(getTourByLocation.rejected, state => {
      state.loadingTour = false;
    });
    builder.addCase(findTourByNames.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(findTourByNames.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataSearchName = action.payload;
    });
    builder.addCase(findTourByNames.rejected, state => {
      state.loadingTour = false;
    });
    builder.addCase(findTourByScreenSearch.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(findTourByScreenSearch.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataSearch = action.payload;
    });
    builder.addCase(findTourByScreenSearch.rejected, state => {
      state.loadingTour = false;
    });
    builder.addCase(findTourByFilter.pending, state => {
      state.loadingTour = true;
    });
    builder.addCase(findTourByFilter.fulfilled, (state, action) => {
      state.loadingTour = false;
      state.dataSearchName = action.payload;
    });
    builder.addCase(findTourByFilter.rejected, state => {
      state.loadingTour = false;
    });
  },
});

export const {logoutTour} = tourSlice.actions;
export const tourReducer = tourSlice.reducer;
