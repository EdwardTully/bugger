// https://reqres.in/api
//axios.post('https://reqres.in/api/users, {
 //   name: 'jake',
  //  job: 'Writer'
//})
//.then((respone)=> {response.data})
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    assignment: [],
    error: '',
}

export const fetchAssmnt=createAsyncThunk('assmnt/fetchAssmnt', (name, job)=>{
    return axios
    .post('https://reqres.in/api/users',{
        name: name,
        job: job
    })
    .then(response=>response.data)
})

const pushSlice = createSlice({
    name: 'assmnt',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchAssmnt.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchAssmnt.rejected, (state, action)=>{
            state.loading = false
            state.assignment=[]
            state.error= action.error.message
        })
        builder.addCase(fetchAssmnt.fulfilled, (state, action)=>{
            state.loading= false
            state.assignment = action.payload
            state.error= ''
        })
    }
})
export default pushSlice.reducer