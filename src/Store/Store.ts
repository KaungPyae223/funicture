import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../features/homeSlice'
import keypeopleSlice from '../features/keypeopleSlice'
import productsSlice from '../features/productsSlice'
import craftSlice from '../features/craftSlice'

export const store = configureStore({
  reducer: {
    home:homeSlice,
    keypeople:keypeopleSlice,
    products:productsSlice,
    craft:craftSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch