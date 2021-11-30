import { configureStore } from '@reduxjs/toolkit'

import { unsplashApi } from '../services/unsplased/service'
import { favoritedReducer, favoritedName } from '../pages/Favorites/slice'

import { localStorageMiddlware } from './middlewares/localstorage'

export const store = configureStore({
  reducer: {
    [favoritedName]: favoritedReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    unsplashApi.middleware,
    localStorageMiddlware,
  ],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
