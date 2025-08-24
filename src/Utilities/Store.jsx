import {configureStore}  from '@reduxjs/toolkit';
import appReducer from './appSlice'
import cacheSlice from './cacheSlice';
import searchSlice from './searchSlice';

const store = configureStore({
    reducer : {

        app:appReducer,
        search:cacheSlice,
        searchResults:searchSlice,
   } })

export default store;