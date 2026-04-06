import { createSlice, nanoid } from "@reduxjs/toolkit";

//-fetch value from store & it can be array or object or both
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}

//-mostly object in createSlice()
//-properties and functions in reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer