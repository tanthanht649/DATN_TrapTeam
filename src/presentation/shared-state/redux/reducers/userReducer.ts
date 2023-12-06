import {User} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';
import moment from 'moment';

export interface UserState {
  loading: boolean;
  dataUsers: User | undefined;
}

export const dataUser: User = {} as User;

const initialState: UserState = {
  loading: false,
  dataUsers: dataUser,
};

interface DataGetUser {
  email: string | null;
  avatar: string | null;
  name: string | null;
  phone_number: string | null;
}

export const getUser = createAsyncThunk(
  'user/getUser',
  async (dataGetUser: DataGetUser) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/account/getAccountByEmail?email=${dataGetUser.email}`;

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
      return res.account;
    } else {
      const body = {
        email: dataGetUser.email,
        phone_number: dataGetUser.phone_number,
        name: dataGetUser.name,
        avatar: dataGetUser.avatar,
      };
      const fetchData = async (body: any) => {
        let url = `${CONSTANTS.IP}api/account/saveAccount`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });

        const res = await response.json();
        return res;
      };
      const res = await fetchData(body);
      if (res.result) {
        return res.account;
      }
    }
  },
);

export const signOut = createAsyncThunk('user/signOut', async () => {
  return dataUser;
});

interface DataUpdateProfile {
  id: String | undefined;
  name: string;
  phone_number: string;
  avatar: string;
}

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (dataUpdate: DataUpdateProfile) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/account/updateAccount`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          // Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUpdate),
      });

      const res = await response.json();
      return res;
    };
    const res = await fetchData();
    if (res.result) {
      return res.account;
      console.log('res.account', res.account);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.dataUsers = action.payload;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.dataUsers = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.dataUsers = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
