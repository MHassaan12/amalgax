import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, post } from '../api';

export const signin = createAsyncThunk('user/signin', async (body, { rejectWithValue }) => {
  try {
    const { data } = await post('/login', body);
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})
export const signup = createAsyncThunk('user/signup', async (body, { rejectWithValue }) => {
  try {
    const { data } = await post('/register', body);
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})

export const me = createAsyncThunk('user/profile', async (body, { rejectWithValue }) => {
  try {
    const { data } = await get('/me');
    console.log(data)
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})

export const team = createAsyncThunk('user/team', async (body, { rejectWithValue }) => {
  try {
    const { data } = await get(`/user_team/${body}`);
    console.log(data)
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})

export const refund = createAsyncThunk('user/refund', async (body, { rejectWithValue }) => {
  try {
    const { data } = await post('/refund', body);
    console.log(data)
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})


const initialState = {
  user: null,
  profile: null,
  loading: false,
  auth: false,
  directMembers: [],
  indirectMembers: [],
  userTeam: [],
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.auth = true
    },
    setDirectMembers: (state, action) => {
      state.directMembers = action.payload
    },
    setIndirectMembers: (state, action) => {
      state.indirectMembers = action.payload
    },
    setUserTeam: (state, action) => {
      state.userTeam = action.payload
    },
  },
  extraReducers: {
    [signin.pending]: (state) => {
      state.loading = true
    },
    [signup.pending]: (state) => {
      state.loading = true
    },
    [me.pending]: (state) => {
      state.loading = true
    },
    [team.pending]: (state) => {
      state.loading = true
    },
    [refund.pending]: (state) => {
      state.loading = true
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false
    },
    [signin.fulfilled]: (state, { payload }) => {
      if (payload?.data) {
        state.user = payload.data
        sessionStorage.setItem("accessToken", payload.accessToken);
        localStorage.setItem(
          "crmSite",
          JSON.stringify({ refreshToken: payload.refreshToken })
        );
      }
      state.loading = false
    },
    [me.fulfilled]: (state, { payload }) => {
      console.log('dddddddd', payload.data.package);
      if (payload?.data) {
        state.profile = payload.data;
        state.directMembers = payload.data.package.direct_members;
        state.indirectMembers = payload.data.package.indirect_members;
        state.auth = true
      }
      state.loading = false
    },
    [team.fulfilled]: (state, { payload }) => {
      console.log('dddddddd', payload);
      if (payload) {
        state.userTeam = payload.data.package.direct_members.concat(payload.data.package.indirect_members);
      }
      // if (payload?.data) {
      //   state.profile = payload.data;
      //   state.directMembers = payload.data.package.direct_members;
      //   state.indirectMembers = payload.data.package.indirect_members;
      //   state.auth = true
      // }
      state.loading = false
    },
    [refund.fulfilled]: (state, { payload }) => {
      
      state.loading = false
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false
    },
    [signin.rejected]: (state, { payload }) => {
      state.loading = false
    },
    [me.rejected]: (state) => {
      state.loading = false
    },
    [team.rejected]: (state) => {
      state.loading = false
    },
    [refund.rejected]: (state) => {
      state.loading = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setProfile, setDirectMembers, setUserTeam, setIndirectMembers } = authSlice.actions

export default authSlice.reducer