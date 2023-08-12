import React from 'react'
//import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchEmail } from './emailSlice'



function UserEmail() {

const dispatch = useDispatch()


//useEffect(()=>{
//    dispatch(fetchUsers())
//},[dispatch])

const userEmail = useSelector((state)=>state.emails)

return (
  <div>
    <h2>User Email</h2>
 
<button onClick={() => dispatch(fetchEmail())}>Get User Name and Email</button>

{userEmail.loading && <div>Loading...</div>}
{!userEmail.loading && userEmail.error ? (
  <div>Error: {userEmail.error}</div>
) : null}
{!userEmail.loading && userEmail.emails.length ? (
  <div id="usersCont">
    <ul>
      {userEmail.emails.map((ea) => (
        <li key={ea.id}>{`${ea.name} has email ${ea.email}`}</li>
      ))}
    </ul>
  </div>
) : null}
  </div>
);
}
export default UserEmail