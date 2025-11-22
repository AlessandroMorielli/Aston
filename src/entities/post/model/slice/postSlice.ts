import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const postAdapter = createEntityAdapter();

const postSlice = createSlice({
    name: 'post',
    initialState: postAdapter.getInitialState({status: 'idle'}),
    reducers: {

    }
})