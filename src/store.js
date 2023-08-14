import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './features/users/userSlice'
import emailsReducer from './features/emails/emailSlice'
import todoReducer from './features/todos/todoSlice'
import postsReducer from './features/posts/postsSlice'


const store = configureStore({

    reducer: {
        users: usersReducer,
        emails: emailsReducer,
        todos: todoReducer,
        posts: postsReducer
    }
})


export default store