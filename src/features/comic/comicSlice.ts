import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ComicState } from '../../type';

type SliceState = {
    loading: boolean
    data: ComicState[]
    error: any
}
   

const initialState: SliceState = {
    loading: false,
    data: [],
    error: null
}

export const fetchComics = createAsyncThunk('comic/fetchComics', () => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga?includes[]=cover_art')
        .then(response => response.data)
})

export const fetchPopular = createAsyncThunk('comic/fetchPopular', (offset: string) => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga?publicationDemographic%5B%5D=shounen&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&offset=' + offset.toString)
        .then(response => response.data)
})

const comicSlice = createSlice({
    name: 'comic',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchComics.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchComics.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = '';
        });
        builder.addCase(fetchComics.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        });
    },
    reducers: {}
})

export const comicReducer = comicSlice.reducer
