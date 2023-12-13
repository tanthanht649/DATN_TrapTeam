import {Blog} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface  BlogState {
  loadingBlog: boolean;
  dataBlogs: Blog[];
}

export const dataBlogs: Blog[] = [];

const initialState: BlogState = {
  loadingBlog: false,
  dataBlogs: dataBlogs,
};

// lấy danh sách bài viết
export const getAllBlogs = createAsyncThunk('blog/getBlog', async () => {
  const fetchData = async () => {
    let url = `${CONSTANTS.IP}api/blog/getAllBlogs`;

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
    return res.blogs;
  } else {
    return [];
  }
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    logoutBlog: state => {
      // Reset state về giá trị ban đầu
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllBlogs.pending, state => {
      state.loadingBlog = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.loadingBlog = false;
      state.dataBlogs = action.payload;
    });
    builder.addCase(getAllBlogs.rejected, state => {
      state.loadingBlog = false;
    });
  },
});

export const {logoutBlog} = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
