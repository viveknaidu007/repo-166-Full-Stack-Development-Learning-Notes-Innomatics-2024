import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],

};

createSlice({
    name:"todos",
    initialState,

    reducers: {
        addTodo:{state, action} => {
            state.todos.push(action.payload);
        },

        deleteTodo:{state,action} =>
    }
})