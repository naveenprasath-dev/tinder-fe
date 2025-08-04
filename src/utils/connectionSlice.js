import { createSlice } from '@reduxjs/toolkit'


export const connectionSlice = createSlice({
    name: 'connection',
    initialState : null,
    reducers: {
      addConnections: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        return action.payload;
      },
      removeConnections: () => {
        return null
      }
    },
  })


  // Action creators are generated for each case reducer function
export const { addConnections, removeConnections } = connectionSlice.actions

export default connectionSlice.reducer