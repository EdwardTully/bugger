import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchTodos } from './todoSlice'

function TodoView() {
    const dispatch = useDispatch()
    const todoData= useSelector((state)=>state.todos
    )

  return (
    <div>
        <h1>Todos</h1>
        <button onClick={()=>dispatch(fetchTodos())}>Get Todos</button>
        {todoData.loading && <div>Loading....</div>}
        {!todoData.loading && todoData.error ? (<div>Error: {todoData.error}</div>):null}
        {!todoData.loading && todoData.todos.length ? (
            <ul>
                {todoData.todos.map((ea)=><li key={ea.id}>{ea.title}</li>)}
            </ul>
        ):null}
    
    </div>
  )
}

export default TodoView