import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid -> used for unique id

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {  // hand-to hand situation comes from state
            const todo = {
                id: nanoid(),
                text: action.payload //.text not wriiten bcz properties are text
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
