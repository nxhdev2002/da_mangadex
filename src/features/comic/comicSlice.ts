import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ComicState } from '../../type';

type FetchState = {
    loading: boolean
    data: ComicState[]
    error: any
}

type SliceState = {
    slide: FetchState
    popular: FetchState
    search: FetchState
}

type SearchParams = {
    title: string,
    offset: number
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
    },
    search: {
        loading: false,
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

export const fetchSearchResult = createAsyncThunk('comic/fetchSearchResult', (params: SearchParams) => {
    console.log("Fetching " + params.offset.toString())
    return axios
        .get('https://nxhdev.pro/mangadex/manga?includes[]=cover_art&title=' + encodeURI(params.title) + '&offset=' + params.offset.toString())
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

        builder.addCase(fetchSearchResult.pending, state => {
            state.search.loading = true;
        });
        builder.addCase(fetchSearchResult.fulfilled, (state, action) => {
            state.search.loading = false;
            state.search.data = action.payload;
            state.search.error = '';
        });
        builder.addCase(fetchSearchResult.rejected, (state, action) => {
            state.search.loading = false;
            state.search.data = [];
            state.search.error = action.error.message;
        });
    },
    reducers: {}
})

export const comicReducer = comicSlice.reducer
