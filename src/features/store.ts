import { comicReducer, eposideReducer, currentReducer, pictureReducer } from './comic'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        comic: comicReducer,
        eposide: eposideReducer,
        current: currentReducer,
        picture: pictureReducer
    }
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
