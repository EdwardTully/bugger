import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading: false,
    todos: [],
    error: '',
}

export const fetchTodos = createAsyncThunk('todo/fetchTodos', ()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.data)
})

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchTodos.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchTodos.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message
            state.todos = []
        })
        builder.addCase(fetchTodos.fulfilled, (state, action)=>{
            state.loading = false
            state.todos = action.payload
            state.error = ''
        })
    }

   

})

export default todoSlice.reducer