import {Event} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface EventState {
  loadingEvent: boolean;
  dataEvents: Event[];
}

export const dataEvent: Event[] = [];

const initialState: EventState = {
  loadingEvent: false,
  dataEvents: dataEvent,
};

// lấy danh sách sự kiện
export const getAllEvents = createAsyncThunk('event/getEvent', async () => {
  const fetchData = async () => {
    let url = `${CONSTANTS.IP}api/event/getAllEvents`;

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
    return res.events;
  } else {
    return [];
  }
});

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    logoutEvent: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllEvents.pending, state => {
      state.loadingEvent = true;
    });
    builder.addCase(getAllEvents.fulfilled, (state, action) => {
      state.loadingEvent = false;
      state.dataEvents = action.payload;
    });
    builder.addCase(getAllEvents.rejected, state => {
      state.loadingEvent = false;
    });
  },
});

export const {logoutEvent} = eventSlice.actions;
export const eventReducer = eventSlice.reducer;
