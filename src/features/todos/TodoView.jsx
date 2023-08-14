import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchTodos } from './todoSlice'

function TodoView() {
    const dispatch = useDispatch()
    const todoData= useSelector((state)=>state.todos
    )

  return (
    <div className='todosCont'>
        <br/>
        <button id='buttons' onClick={()=>dispatch(fetchTodos())}>Get Todos</button>
        <br/>
        
        {todoData.loading && <div>Loading....</div>}
        {!todoData.loading && todoData.error ? (<div>Error: {todoData.error}</div>):null}
        {!todoData.loading && todoData.todos.length ? (
          <div className='todos'>
            <ul>
                {todoData.todos.map((ea)=><li key={ea.id}>{ea.title}</li>)}
            </ul>
          </div>
            
        ):null}
        
    
    </div>
  )
}

export default TodoView