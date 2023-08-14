import React from 'react'
//import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchUsers } from './userSlice'



function UserWindow() {

const dispatch = useDispatch()


//useEffect(()=>{
//    dispatch(fetchUsers())
//},[dispatch])

const usersInfo = useSelector((state)=>state.users)

return (
  <div className='userCont'>
    <br/>
    <button id='buttons' onClick={() => dispatch(fetchUsers())}>Load User Names</button>
    
   

    {usersInfo.loading && <div>Loading...</div>}
    {!usersInfo.loading && usersInfo.error ? (
      <div>Error: {usersInfo.error}</div>
    ) : null}
    {!usersInfo.loading && usersInfo.users.length ? (
      
        <ul className='users'>
          {usersInfo.users.map((ea) => (
            <li key={ea.id}>{ea.name}</li>
          ))}
        </ul>
      
    ) : null}

    
  </div>
);
}
export default UserWindow

