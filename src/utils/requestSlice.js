import { createSlice } from '@reduxjs/toolkit'


export const requestSlice = createSlice({
    name: 'requests',
    initialState : null,
    reducers: {
      addRequests: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return action.payload;
      },
      removeRequest: (state, action) => {
        const newArray = state.filter((req) => {
          if (req._id !== action.payload)  {
            return req;
          }
        });
       
        return newArray;
      }
    },
  })


  // Action creators are generated for each case reducer function
export const { addRequests, removeRequest } = requestSlice.actions

export default requestSlice.reducer