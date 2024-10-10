import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  const [inp,setInput]=useState("")

  const btn=()=>{
    navigate(`profile/${inp}`)
  }
  return (
<>
<input value={inp} onChange={(e)=>setInput(e.target.value)}></input>
<button onClick={btn}>Submit</button>
</>
  )
}
