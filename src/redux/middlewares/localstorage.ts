import { Middleware } from 'redux'
import { PayloadAction } from '@reduxjs/toolkit'

import { add, remove } from '../../pages/Favorites/slice'
import { FAVORITED } from '../../helpers/localStorageKeys'

export const localStorageMiddlware: Middleware<unknown, unknown> =
  (state) => (next) => (action: PayloadAction) => {
    if (add.match(action)) {
      localStorage.setItem(
        FAVORITED,
        // @ts-ignore
        JSON.stringify([...state.getState().favorited.ids, action.payload])
      )
    }

    if (remove.match(action)) {
      localStorage.setItem(
        FAVORITED,

        JSON.stringify(
          // @ts-ignore
          state
            .getState()
            // @ts-ignore
            .favorited.ids.filter((item) => item !== action.payload)
        )
      )
    }

    return next(action)
  }
