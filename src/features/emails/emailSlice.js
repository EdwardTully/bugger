import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    emails: [],
    error: ''
}

export const fetchEmail = createAsyncThunk('email/fetchEmail',()=>{
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data)
})

const emailSlice = createSlice({
    name: 'email',
    initialState: initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchEmail.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchEmail.rejected, (state,action)=>{
            state.error = action.error.message
            state.loading = false
            state.emails = []
        })
        builder.addCase(fetchEmail.fulfilled, (state,action)=>{
            state.loading = false
            state.error = ''
            state.emails = action.payload
        })
    }

})

export default emailSlice.reducer