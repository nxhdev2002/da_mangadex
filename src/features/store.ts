import { comicReducer, eposideReducer, currentReducer } from './comic'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        comic: comicReducer,
        eposide: eposideReducer,
        current: currentReducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
