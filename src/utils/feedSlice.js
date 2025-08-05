import { createSlice } from '@reduxjs/toolkit'


export const feedSlice = createSlice({
    name: 'feed',
    initialState : null,
    reducers: {
      addFeed: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return action.payload;
      },
      removeUserFromFeed: (state, action) => {
        const newFeed = state.filter((user) => {
          if (user._id !== action.payload)  {
            return user;
          }
        });
       
        return newFeed;
      }
    },
  })


  // Action creators are generated for each case reducer function
export const { addFeed, removeUserFromFeed } = feedSlice.actions

export default feedSlice.reducer