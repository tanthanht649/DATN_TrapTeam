import {User} from '@domain';
import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface UserState {
  loadingUser: boolean;
  dataUsers: User | undefined;
}

export const dataUser: User = {} as User;

const initialState: UserState = {
  loadingUser: false,
  dataUsers: dataUser,
};

interface DataGetUser {
  email: string | null;
  avatar: string | null;
  name: string | null;
  phone_number: string | null;
}

// lấy thông tin user kết hợp lưu thông tin user vào database khi đăng nhập lần đầu
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

// reset store redux khi logout
export const logoutAction = createAction('logout');

interface DataUpdateProfile {
  id: String | undefined;
  name: string;
  phone_number: string;
  avatar: string;
}


// cập nhật thông tin user
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
  reducers: {
    logout: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loadingUser = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.dataUsers = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.dataUsers = action.payload;
      });
  },
});

export const {logout} = userSlice.actions;
export const userReducer = userSlice.reducer;
