import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../redux/store'

type FavoritedState = {
  ids: string[]
}

const initialState = { ids: [] } as FavoritedState
export const favoritedName = 'favorited'

export const favoritedSlice = createSlice({
  name: favoritedName,
  initialState,
  reducers: {
    init: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        ids: action.payload,
      }
    },
    add: (state, action: PayloadAction<string>) => {
      state.ids.push(action.payload)
    },
    remove: (state, action: PayloadAction<string>) => {
      const result = state.ids.filter((item) => item !== action.payload)
      return {
        ...state,
        ids: result,
      }
    },
  },
})

export const { add, remove, init } = favoritedSlice.actions

export const getIds = (state: RootState) => state[favoritedName].ids
export const checkIfElementExist = (state: RootState, id: string) =>
  state[favoritedName].ids.includes(id)

export const favoritedReducer = favoritedSlice.reducer
