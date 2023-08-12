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
  <div>
    <h2>User List</h2>
    <button onClick={() => dispatch(fetchUsers())}>Get User Names</button>

    {usersInfo.loading && <div>Loading...</div>}
    {!usersInfo.loading && usersInfo.error ? (
      <div>Error: {usersInfo.error}</div>
    ) : null}
    {!usersInfo.loading && usersInfo.users.length ? (
      <div id="usersCont">
        <ul>
          {usersInfo.users.map((ea) => (
            <li key={ea.id}>{ea.name}</li>
          ))}
        </ul>
      </div>
    ) : null}


  </div>
);
}
export default UserWindow

