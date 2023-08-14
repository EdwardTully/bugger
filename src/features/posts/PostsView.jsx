import React from 'react'
import { fetchPosts } from './postsSlice'
import {useSelector, useDispatch} from 'react-redux'

function PostsView() {

    const dispatch = useDispatch()

    const postData = useSelector((state)=>
        state.posts
    )
  return (
    <div className='postCont'>
        <br/>
        <button id='buttons' onClick={()=>dispatch(fetchPosts())}>Load Post Titles</button>
        <br/>
        {postData.loading && <div>Loading....</div>}
        {!postData.loading && postData.error ? (<div>Error: {postData.error}</div>):null}
        {!postData.loading && postData.posts.length ? (
            <ol className='posts'>
                {postData.posts.map((ea)=>(
                    <li key={ea.id}>{ea.title}</li>
                )
                    
                )}
            </ol>
        ):null}

    </div>
  )
}

export default PostsView