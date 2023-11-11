import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')

  const validateInput=(text)=>{
    if (text.search(/\d/)>=0) {
      return true
      
    }else{
      return false
    }
  }
  const firsvalidateColor=validateInput(firstName)?'text-danger':null
  const lastvalidateColor=validateInput(lastName)?'text-danger':null
  return (
    <div>

      <input type="text" className={`${firsvalidateColor}`}  placeholder='first Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <input type="text" className={`${lastvalidateColor}`}  placeholder='last Name'  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    </div>
  )
}

export default App