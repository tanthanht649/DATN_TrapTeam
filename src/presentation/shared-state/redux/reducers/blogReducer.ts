import {Blog} from '@domain';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CONSTANTS} from '@core';

export interface  BlogState {
  loadingBlog: boolean;
  dataBlogs: Blog[];
  dataBlogUser:Blog[]
}

export const dataBlogs: Blog[] = [];

export const dataBlogUser: Blog[] = [];
const initialState: BlogState = {
  loadingBlog: false,
  dataBlogs: dataBlogs,
  dataBlogUser: dataBlogUser,
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
    return res.blogs.reverse();
  } else {
    return [];
  }
});

interface DataAddBlog {
  user_id: string | undefined;
  content: string | undefined;
  image: string | undefined;
}

// tạo blog mới của user
export const addBlog = createAsyncThunk(
  'blog/addBlog',
  async (data: DataAddBlog) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/blog/createBlog`;

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
      console.log('resAddBlog', res);
      return res;
    } else {
      return [];
    }
  },
);

// lấy danh sách bài viết  của user
export const getBlogUser = createAsyncThunk(
  'blog/getBlogUser',
  async (user_id: string | undefined) => {
    const fetchData = async () => {
      let url = `${CONSTANTS.IP}api/blog/getAllBlogsByUserId?user_id=${user_id}`;

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
      return res.blogs.reverse();
    }
  },
);


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
    builder.addCase(addBlog.pending, state => {
      state.loadingBlog = true;
    });
    builder.addCase(addBlog.fulfilled, (state, action) => {
      state.loadingBlog = false;
    });
    builder.addCase(addBlog.rejected, state => {
      state.loadingBlog = false;
    });
    builder.addCase(getBlogUser.pending, state => {
      state.loadingBlog = true;
    })
    builder.addCase(getBlogUser.fulfilled, (state, action) => {
      state.loadingBlog = false;
      state.dataBlogUser = action.payload;
    })
    builder.addCase(getBlogUser.rejected, state => {
      state.loadingBlog= false;
    })
  },
});

export const {logoutBlog} = blogSlice.actions;
export const blogReducer = blogSlice.reducer;
