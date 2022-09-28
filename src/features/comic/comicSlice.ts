import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ComicState } from '../../type';

type SliceState = {
    slide: {
        loading: boolean
        data: ComicState[]
        error: any
    },
    popular: {
        loading: boolean
        data: ComicState[]
        error: any
    }
}
   

const initialState: SliceState = {
    slide: {
        loading: true,
        data: [],
        error: null
    },
    popular: {
        loading: true,
        data: [],
        error: null
    }
}

export const fetchSlide = createAsyncThunk('comic/fetchSlide', () => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga?includes[]=cover_art')
        .then(response => response.data)
})

export const fetchPopular = createAsyncThunk('comic/fetchPopular', (offset: number) => {
    console.log("Fetching " + offset.toString())
    return axios
        .get('https://nxhdev.pro/mangadex/manga?publicationDemographic%5B%5D=shounen&contentRating%5B%5D=erotica&order%5BlatestUploadedChapter%5D=desc&includes%5B%5D=cover_art&offset=' + offset.toString())
        .then(response => response.data)
})

const comicSlice = createSlice({
    name: 'comic',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchSlide.pending, state => {
            state.slide.loading = true;
        });
        builder.addCase(fetchSlide.fulfilled, (state, action) => {
            state.slide.loading = false;
            state.slide.data = action.payload;
            state.slide.error = '';
        });
        builder.addCase(fetchSlide.rejected, (state, action) => {
            state.slide.loading = false;
            state.slide.data = [];
            state.slide.error = action.error.message;
        });

        builder.addCase(fetchPopular.pending, state => {
            state.popular.loading = true;
        });
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.popular.loading = false;
            state.popular.data = [...state.popular.data, ...action.payload];
            state.popular.error = '';
        });
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.popular.loading = false;
            state.popular.data = [];
            state.popular.error = action.error.message;
        });
    },
    reducers: {}
})

export const comicReducer = comicSlice.reducer
