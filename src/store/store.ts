import { configureStore, combineReducers } from '@reduxjs/toolkit'
import filtersReducer from './filtersSlice'

const rootReducer = combineReducers({
  filters: filtersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export function setupStore(
  preloadedState?: Partial<ReturnType<typeof rootReducer>>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type TestStore = ReturnType<typeof setupStore>
