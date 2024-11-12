import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],

};

createSlice({
    name:"todos",
    initialState,

    reducers: {
        addTodo:{}
    }
})