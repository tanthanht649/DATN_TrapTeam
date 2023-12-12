import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {
  userReducer,
  eventReducer,
  favoriteReducer,
  locationReducer,
  tourReducer,
  reviewReducer,
  provinceReducer,
  bookingTourReducer
} from './reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    favorite: favoriteReducer,
    location: locationReducer,
    tour: tourReducer,
    review: reviewReducer,
    province: provinceReducer,
    bookingTour: bookingTourReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
