import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get, post } from '../api';

export const allUsers = createAsyncThunk('admin/users', async (body, { rejectWithValue }) => {
  try {
    const { data } = await get('/users', body);
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})
export const dipositUser = createAsyncThunk('admin/dispatch', async (body, { rejectWithValue }) => {
  try {
    const { data } = await get('/deposit_users', body);
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})
export const refundUser = createAsyncThunk('admin/refund', async (body, { rejectWithValue }) => {
  try {
    const { data } = await get('/refund_users', body);
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})

export const dispatchAction = createAsyncThunk('user/dispatchAction', async (body, { rejectWithValue }) => {
  try {
    const { data } = await post('/deposit_action', body);
    console.log(data)
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})
export const refundAction = createAsyncThunk('user/refundAction', async (body, { rejectWithValue }) => {
  try {
    const { data } = await post('/refund_action', body);
    console.log(data)
    return data;
  } catch (err) {
    console.log('qqqqqqqqqqqqqqq', err, err.response.data)
    return rejectWithValue(err.response.data)
  }
})


const initialState = {
  users: [],
  depositUsers: [],
  loading: false,
  refundUsers: []
}

export const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
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
    [allUsers.pending]: (state) => {
      state.loading = true
    },
    [dipositUser.pending]: (state) => {
      state.loading = true
    },
    [dispatchAction.pending]: (state) => {
      state.loading = true
    },
    [refundUser.pending]: (state) => {
      state.loading = true
    },
    [refundAction.pending]: (state) => {
      state.loading = true
    },
    [dipositUser.fulfilled]: (state, { payload }) => {
      if (payload?.data) {
        console.log(payload);
        state.depositUsers = payload.data;
      }
      state.loading = false
    },
    [allUsers.fulfilled]: (state, { payload }) => {
      if (payload?.data) {
        console.log(payload);
        state.users = payload.data;
      }
      state.loading = false
    },
    [dispatchAction.fulfilled]: (state, { payload }) => {
      state.loading = false
    },
    [refundUser.fulfilled]: (state, { payload }) => {
      console.log('dddddddd', payload);
      if (payload?.data) {
        console.log(payload);
        state.refundUsers = payload.data;
      }
      state.loading = false
    },
    [refundAction.fulfilled]: (state, { payload }) => {
      state.loading = false
    },
    [dipositUser.rejected]: (state, { payload }) => {
      state.loading = false
    },
    [allUsers.rejected]: (state, { payload }) => {
      state.loading = false
    },
    [dispatchAction.rejected]: (state) => {
      state.loading = false
    },
    [refundUser.rejected]: (state) => {
      state.loading = false
    },
    [refundAction.rejected]: (state) => {
      state.loading = false
    },
  }
})

// Action creators are generated for each case reducer function
export const { setUsers, setProfile, setDirectMembers, setUserTeam, setIndirectMembers } = adminSlice.actions

export default adminSlice.reducer