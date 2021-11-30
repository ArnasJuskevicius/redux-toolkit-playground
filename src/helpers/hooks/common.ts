import React from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from '../../redux/store'

export const onComponentMount = (func: () => void) =>
  React.useEffect(() => {
    func()
  }, [])

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
