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
  <div className='emailCont'>
 <br/>
<button id='buttons' onClick={() => dispatch(fetchEmail())}>Get User Name and Email</button>
<br/>
{userEmail.loading && <div>Loading...</div>}
{!userEmail.loading && userEmail.error ? (
  <div>Error: {userEmail.error}</div>
) : null}
{!userEmail.loading && userEmail.emails.length ? (
  
    <ul className='emails'>
      {userEmail.emails.map((ea) => (
        <li key={ea.id}>{`${ea.name} has email ${ea.email}`}</li>
      ))}
    </ul>
  
) : null}
  </div>
);
}
export default UserEmail