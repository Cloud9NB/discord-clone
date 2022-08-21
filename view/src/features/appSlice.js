import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channelListId: null,
  channelListName: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelListId = action.payload.channelListId;
      state.channelListName = action.payload.channelListName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelListId = state => state.app.channelListId;
export const selectChannelListName = state => state.app.channelListName;

export default appSlice.reducer;
