import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name : "Search Results",
    initialState :{
        searchItem : null
    },
    reducers :{
        addSearch : (state,action) => {
            state.searchItem = action.payload
        }
    }
})

export const {addSearch} = searchSlice.actions;

export default searchSlice.reducer;