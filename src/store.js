import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './features/users/userSlice'
import emailsReducer from './features/emails/emailSlice'
import todoReducer from './features/todos/todoSlice'


const store = configureStore({

    reducer: {
        users: usersReducer,
        emails: emailsReducer,
        todos: todoReducer,
    }
})


export default store