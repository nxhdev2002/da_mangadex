import { createAction, createReducer } from '@reduxjs/toolkit'
import { ComicState } from '../../type'

export const setCurrent = createAction<ComicState>('current/setCurrent')
const initialState: ComicState = {
    id: '11ad4c32-db23-4a52-a02e-05e6c80e042f',
    name: 'loading',
    desc:  {},
    thumb: 'loading',
    currentChap: 'loading',
    createAt: 'loading',
    updatedAt: 'loading',
    availableTranslatedLanguages: []
}

export const currentReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCurrent, (state, action) => action.payload)
})

