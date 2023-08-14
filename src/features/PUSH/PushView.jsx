import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchAssmnt } from './pushSlice'
import { useState } from 'react'



function PushView() {

   
    const [name, setName]= useState('')
    const [job, setJob]= useState('')

  console.log(job)
   
   const handleSubmit=(e)=>{
    e.preventDefault()
   
   }
    
    const dispatch = useDispatch()
    
    const assmntData = useSelector((state)=>state.assmnt)
   
  return (
    <div className='jobCont'>
        <h3>Event Entry</h3>
        <form id = 'entryForm' onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='name' required />
            <input type='text' onChange={(e)=>{setJob(e.target.value)}} value={job} placeholder='job' required></input>
        </form>
        <button id='buttons' type='submit' onClick={()=>dispatch(fetchAssmnt(name, job))}>Submit</button>
        <div className='jobMessage'>
            {assmntData.loading && <div>Loading...</div>}
            {!assmntData.loading && assmntData.error ? <div>error: {assmntData.error}</div> :null}
            {!assmntData.loading ? 
               <div>
                Hello {`${name} the ${job}!!!!    `}

                {`${assmntData.assignment.name}, your assignment id is ${assmntData.assignment.id}.  TIMESTAMP at: 
               ${assmntData.assignment.createdAt}.It is a GO GO GO!!!`}
               </div>
            :null}
        </div>
    </div>
  )
}

export default PushView