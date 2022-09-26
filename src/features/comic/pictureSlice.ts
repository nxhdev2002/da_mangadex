import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ChapterState, ComicState } from '../../type';

type SliceState = {
    loading: boolean
    data: string[]
    error: any
}

type payload = {
    comic: ComicState,
    eposide: ChapterState
}

const initialState: SliceState = {
    loading: false,
    data: [],
    error: null
}

export const fetchPictures = createAsyncThunk('picture/2', (payload: payload) => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga/'+payload.comic.id+'/chapter/' + payload.eposide.id)
        .then(response => response.data)
})

const pictureSlice = createSlice({
    name: 'picture',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchPictures.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchPictures.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(fetchPictures.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    },
    reducers: {}
})

export const pictureReducer = pictureSlice.reducer
