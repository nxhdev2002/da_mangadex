import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ChapterState, ComicState } from '../../type';

type SliceState = {
    loading: boolean
    data: ChapterState[]
    error: any
}
   

const initialState: SliceState = {
    loading: false,
    data: [],
    error: null
}

export const fetchEposides = createAsyncThunk('eposide/fetchEposides', (comic: ComicState) => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga/'+comic.id+'/chapter')
        .then(response => response.data)
})

const eposideSlice = createSlice({
    name: 'eposide',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchEposides.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchEposides.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(fetchEposides.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    },
    reducers: {}
})

export const eposideReducer = eposideSlice.reducer
